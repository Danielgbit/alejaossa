// src/app/api/blogs/slug/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { readBlogsData, writeBlogsData } from "@/lib/json-utils";
import { Blog } from "@/types/blog";
import { log } from "node:console";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const data = await readBlogsData();
    const blog = data.blogs.find((b: any) => b.slug === slug);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error en GET /api/blogs/slug/[slug]:", error);
    return NextResponse.json({ error: "Error reading blog" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const data = await readBlogsData();

    // Buscar el índice del blog por slug
    const blogIndex = data.blogs.findIndex((b: any) => b.slug === slug);

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Eliminar el blog del array
    data.blogs.splice(blogIndex, 1);

    // Guardar los datos actualizados
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

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    const updates = await request.json();
    
    // Leer datos existentes
    const data = await readBlogsData();

    // Encontrar el índice del blog
    const blogIndex = data.blogs.findIndex((b: Blog) => b.slug === slug);

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Si se intenta cambiar el slug, verificar que no exista
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

    // Actualizar el blog
    const updatedBlog = {
      ...data.blogs[blogIndex],
      ...updates,
      // Mantener el ID original y actualizar la fecha de modificación
      date: new Date().toISOString(),
    };

    data.blogs[blogIndex] = updatedBlog;

    // Guardar los datos actualizados
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
