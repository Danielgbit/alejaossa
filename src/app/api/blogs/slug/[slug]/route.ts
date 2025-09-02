import { NextRequest, NextResponse } from "next/server";
import { readBlogsData, writeBlogsData } from "@/lib/json-utils";
import { Blog } from "@/types/blog";

type Params = {
  params: { slug: string };
};

// GET handler
export async function GET(request: NextRequest, context: Params) {
  try {
    const { slug } = context.params;
    const data = await readBlogsData();
    const blog = data.blogs.find((b: { slug: string }) => b.slug === slug);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error en GET /api/blogs/slug/[slug]:", error);
    return NextResponse.json({ error: "Error reading blog" }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(request: NextRequest, context: Params) {
  try {
    const { slug } = context.params;
    const data = await readBlogsData();

    const blogIndex = data.blogs.findIndex(
      (b: { slug: string }) => b.slug === slug
    );

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    data.blogs.splice(blogIndex, 1);
    const success = await writeBlogsData(data);

    if (!success) {
      return NextResponse.json({ error: "Error saving data" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en DELETE /api/blogs/slug/[slug]:", error);
    return NextResponse.json({ error: "Error deleting blog" }, { status: 500 });
  }
}

// PUT handler
export async function PUT(request: NextRequest, context: Params) {
  try {
    const { slug } = context.params;
    const updates = await request.json();

    const data = await readBlogsData();
    const blogIndex = data.blogs.findIndex((b: Blog) => b.slug === slug);

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    if (updates.slug && updates.slug !== slug) {
      const slugExists = data.blogs.some(
        (b: Blog) => b.slug === updates.slug && b.slug !== slug
      );
      if (slugExists) {
        return NextResponse.json(
          { error: "Ya existe un blog con este slug" },
          { status: 409 }
        );
      }
    }

    const updatedBlog = {
      ...data.blogs[blogIndex],
      ...updates,
      date: new Date().toISOString(),
    };

    data.blogs[blogIndex] = updatedBlog;
    const success = await writeBlogsData(data);

    if (!success) {
      return NextResponse.json({ error: "Error saving data" }, { status: 500 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("Error en PUT /api/blogs/slug/[slug]:", error);
    return NextResponse.json({ error: "Error updating blog" }, { status: 500 });
  }
}
