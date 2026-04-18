import { NextResponse } from "next/server";
import { appendData } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.formData();
  const name = body.get("name")?.toString() ?? "Anonymous";
  const email = body.get("email")?.toString() ?? "noreply@example.com";
  const service = body.get("service")?.toString() ?? "General inquiry";
  const message = body.get("message")?.toString() ?? "";
  const company = body.get("company")?.toString() ?? "";

  const newMessage = {
    id: crypto.randomUUID(),
    name,
    email,
    service,
    company,
    message,
    createdAt: new Date().toISOString(),
  };

  await appendData("contact_messages", newMessage);

  return NextResponse.redirect(new URL("/contact?success=1", request.url));
}
