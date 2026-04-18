import { NextResponse } from "next/server";
import { readData, writeData } from "@/lib/db";

const editableTables = ["services", "team_members", "faqs", "contact_personnel", "site_content"] as const;

type EditableTable = (typeof editableTables)[number];

function makeItem(table: EditableTable, values: Record<string, string>) {
  if (table === "services") {
    return {
      id: crypto.randomUUID(),
      title: values.title ?? "New service",
      subtitle: values.subtitle ?? "",
      description: values.description ?? "",
    };
  }

  if (table === "team_members") {
    return {
      id: crypto.randomUUID(),
      name: values.name ?? "New member",
      role: values.role ?? "",
      bio: values.bio ?? "",
    };
  }

  if (table === "faqs") {
    return {
      id: crypto.randomUUID(),
      category: values.category ?? "General",
      question: values.question ?? "New question",
      answer: values.answer ?? "",
    };
  }

  if (table === "contact_personnel") {
    return {
      id: crypto.randomUUID(),
      name: values.name ?? "New contact",
      position: values.position ?? "",
      email: values.email ?? "",
      phone: values.phone ?? "",
    };
  }

  throw new Error("Unsupported table for create");
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ table: string }> }
) {
  const { table } = await params;
  const resolvedTable = table as EditableTable;
  if (!editableTables.includes(resolvedTable)) {
    return NextResponse.json({ error: "Table not editable." }, { status: 400 });
  }

  const formData = await request.formData();
  const action = formData.get("action")?.toString() ?? "create";
  const id = formData.get("id")?.toString();
  const rawValues = Object.fromEntries(formData.entries()) as Record<string, string>;
  const values = { ...rawValues };
  delete values.action;
  delete values.id;
  const referer = request.headers.get("referer") ?? "/admin";

  if (resolvedTable === "site_content") {
    const current = await readData<any>(resolvedTable);
    const updated = {
      ...current,
      hero: {
        ...current.hero,
        headline: values.headline ?? current.hero.headline,
        subheadline: values.subheadline ?? current.hero.subheadline,
        ctaPrimary: values.ctaPrimary ?? current.hero.ctaPrimary,
        ctaSecondary: values.ctaSecondary ?? current.hero.ctaSecondary,
      },
      intro: {
        ...current.intro,
        title: values.introTitle ?? current.intro.title,
        description: values.introDescription ?? current.intro.description,
      },
    };
    await writeData(resolvedTable, updated);
    return NextResponse.redirect(new URL(referer, request.url));
  }

  const data = await readData<any[]>(resolvedTable);
  if (!Array.isArray(data)) {
    return NextResponse.json({ error: "Invalid data format." }, { status: 500 });
  }

  if (action === "create") {
    const item = makeItem(resolvedTable, values);
    data.push(item);
    await writeData(resolvedTable, data);
    return NextResponse.redirect(new URL(referer, request.url));
  }

  if (!id) {
    return NextResponse.json({ error: "Missing item id." }, { status: 400 });
  }

  const index = data.findIndex((item) => item.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }

  if (action === "update") {
    const updated = { ...data[index], ...values };
    data[index] = updated;
    await writeData(resolvedTable, data);
    return NextResponse.redirect(new URL(referer, request.url));
  }

  if (action === "delete") {
    const filtered = data.filter((item) => item.id !== id);
    await writeData(resolvedTable, filtered);
    return NextResponse.redirect(new URL(referer, request.url));
  }

  return NextResponse.json({ error: "Unknown action." }, { status: 400 });
}
