import fs from "fs/promises";
import path from "path";

type TableName =
  | "site_content"
  | "services"
  | "team_members"
  | "faqs"
  | "contact_personnel"
  | "contact_messages"
  | "logs"
  | "users";

const dataDirectory = path.join(process.cwd(), "data");

export async function readData<T>(table: TableName): Promise<T> {
  const filePath = path.join(dataDirectory, `${table}.json`);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export async function writeData<T>(table: TableName, payload: T) {
  const filePath = path.join(dataDirectory, `${table}.json`);
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2), "utf-8");
}

export async function appendData<T extends { id: string }>(table: TableName, item: T) {
  const data = await readData<T[]>(table);
  data.push(item);
  await writeData(table, data);
}
