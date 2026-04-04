import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type ProjectKey = "calgpa" | "zephra" | "aether" | "miniminds" | "carsio" | "roledoc" | "textotest";

type RatingEntry = {
  count: number;
  sum: number;
  starCounts: [number, number, number, number, number];
};

type RatingsFile = Record<ProjectKey, RatingEntry>;

const ratingsPath = path.join(process.cwd(), "data", "project-ratings.json");
const keys: ProjectKey[] = ["calgpa", "zephra", "aether", "miniminds", "carsio", "roledoc", "textotest"];

function defaultRatings(): RatingsFile {
  return {
    calgpa: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
    zephra: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
    aether: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
    miniminds: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
    carsio: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
    roledoc: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
    textotest: { count: 0, sum: 0, starCounts: [0, 0, 0, 0, 0] },
  };
}

async function readRatings(): Promise<RatingsFile> {
  try {
    const raw = await fs.readFile(ratingsPath, "utf8");
    const parsed = JSON.parse(raw) as Partial<RatingsFile>;
    const base = defaultRatings();

    for (const key of keys) {
      const row = parsed[key];
      if (!row) {
        continue;
      }
      base[key] = {
        count: Math.max(0, Number(row.count) || 0),
        sum: Math.max(0, Number(row.sum) || 0),
        starCounts: [0, 1, 2, 3, 4].map((index) => Math.max(0, Number(row.starCounts?.[index]) || 0)) as [number, number, number, number, number],
      };
    }

    return base;
  } catch {
    const base = defaultRatings();
    await fs.mkdir(path.dirname(ratingsPath), { recursive: true });
    await fs.writeFile(ratingsPath, JSON.stringify(base, null, 2), "utf8");
    return base;
  }
}

function toViewModel(data: RatingsFile) {
  return Object.fromEntries(
    keys.map((key) => {
      const row = data[key];
      const average = row.count > 0 ? Number((row.sum / row.count).toFixed(2)) : 0;
      return [key, { count: row.count, average, starCounts: row.starCounts }];
    })
  );
}

export async function GET() {
  const ratings = await readRatings();
  return NextResponse.json({ ratings: toViewModel(ratings) });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { projectKey?: string; stars?: number };
  const projectKey = body.projectKey as ProjectKey;
  const stars = Number(body.stars);

  if (!keys.includes(projectKey)) {
    return NextResponse.json({ error: "Invalid project key." }, { status: 400 });
  }

  if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
    return NextResponse.json({ error: "Stars must be an integer from 1 to 5." }, { status: 400 });
  }

  const ratings = await readRatings();
  const row = ratings[projectKey];
  row.count += 1;
  row.sum += stars;
  row.starCounts[stars - 1] += 1;

  await fs.writeFile(ratingsPath, JSON.stringify(ratings, null, 2), "utf8");
  return NextResponse.json({ ratings: toViewModel(ratings) });
}
