import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "blogs.json");


// GET → obtener todos los blogs
export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  const blogs = JSON.parse(data);
  return NextResponse.json(blogs);
}

// POST → crear un nuevo blog
export async function POST(req: Request) {
  const newBlog = await req.json();

  const data = await fs.readFile(filePath, "utf-8");
  const blogs = JSON.parse(data);

  const blogWithId = {
    id: blogs.length + 1,
    date: new Date().toISOString(),
    ...newBlog,
  };

  blogs.push(blogWithId);

  await fs.writeFile(filePath, JSON.stringify(blogs, null, 2), "utf-8");

  return NextResponse.json(blogWithId, { status: 201 });
}
