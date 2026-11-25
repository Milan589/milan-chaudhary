const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const ONGOING = /present|current|now|ongoing|today/i;

type YM = { y: number; m: number }; // m: 0-11

function parsePart(part: string, edge: "start" | "end"): YM | null {
  const s = part.trim().toLowerCase();
  const year = s.match(/\b(19|20)\d{2}\b/);
  if (!year) return null;
  const y = Number(year[0]);
  const mon = MONTHS.findIndex((m) => s.includes(m));
  if (mon >= 0) return { y, m: mon };
  return { y, m: edge === "start" ? 0 : 11 };
}

const toIndex = (d: YM) => d.y * 12 + d.m;

function plural(n: number, unit: string) {
  return `${n} ${unit}${n === 1 ? "" : "s"}`;
}

export function formatMonths(total: number): string {
  if (total < 1) return "less than a month";
  const years = Math.floor(total / 12);
  const months = total % 12;
  if (years === 0) return plural(months, "month");
  if (months === 0) return plural(years, "year");
  return `${years} yr ${months} mo`;
}

export type ProjectTime = {
  durationMonths: number;
  duration: string;
  startedAgo: string;
  endedAgo: string | null;
  ongoing: boolean;
};

export function ProjectTime(
  period: string,
  now: Date = new Date(),
): ProjectTime | null {
  const parts = period.split(/\s*[–—-]\s*|\s+to\s+/i).filter(Boolean);
  const start = parsePart(parts[0] ?? "", "start");
  if (!start) return null;

  const current: YM = { y: now.getFullYear(), m: now.getMonth() };
  const ongoing = parts.length > 1 && ONGOING.test(parts[parts.length - 1]);

  let end: YM;
  if (ongoing) end = current;
  else if (parts.length > 1)
    end = parsePart(parts[parts.length - 1], "end") ?? start;
  else end = start;

  // a year-only end in the current year must not be in the future
  if (toIndex(end) > toIndex(current)) end = current;
  if (toIndex(end) < toIndex(start)) end = start;

  const durationMonths = Math.max(1, toIndex(end) - toIndex(start) + 1);
  const since = (d: YM) => Math.max(0, toIndex(current) - toIndex(d));
  const ago = (n: number) => (n < 1 ? "This month" : `${formatMonths(n)} ago`);

  return {
    durationMonths,
    duration: formatMonths(durationMonths),
    startedAgo: ago(since(start)),
    endedAgo: ongoing ? null : ago(since(end)),
    ongoing,
  };
}
