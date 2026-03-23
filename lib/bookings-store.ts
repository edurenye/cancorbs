import fs from "fs/promises";
import path from "path";

export type BookingRecord = {
  id: number;
  startDate: string;
  endDate: string;
  children: number;
  email: string;
  createdAt: string;
};

const defaultPath = path.join(process.cwd(), "data", "bookings.json");

function filePath() {
  return process.env.BOOKINGS_FILE ?? defaultPath;
}

let writeChain: Promise<unknown> = Promise.resolve();

function runExclusive<T>(fn: () => Promise<T>): Promise<T> {
  const next = writeChain.then(fn);
  writeChain = next.then(
    () => undefined,
    () => undefined
  );
  return next;
}

export async function readBookings(): Promise<BookingRecord[]> {
  const p = filePath();
  try {
    const raw = await fs.readFile(p, "utf8");
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? (data as BookingRecord[]) : [];
  } catch (e) {
    const err = e as NodeJS.ErrnoException;
    if (err.code === "ENOENT") return [];
    throw e;
  }
}

export async function appendBooking(input: {
  startDate: Date;
  endDate: Date;
  children: number;
  email: string;
}): Promise<BookingRecord> {
  return runExclusive(async () => {
    const p = filePath();
    await fs.mkdir(path.dirname(p), { recursive: true });

    const list = await readBookings();
    const maxId = list.reduce((m, b) => Math.max(m, b.id), 0);
    const record: BookingRecord = {
      id: maxId + 1,
      startDate: input.startDate.toISOString(),
      endDate: input.endDate.toISOString(),
      children: input.children,
      email: input.email,
      createdAt: new Date().toISOString(),
    };
    list.push(record);
    await fs.writeFile(p, JSON.stringify(list, null, 2), "utf8");
    return record;
  });
}
