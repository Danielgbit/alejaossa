// src/app/api/blogs/route.ts
import { NextResponse } from "next/server";
import { readBlogsData, writeBlogsData } from "@/lib/json-utils";

export async function GET() {
  try {
    const data = await readBlogsData();
    return NextResponse.json(data.blogs);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Error reading blogs" }, { status: 500 });
  }
}

// API CREATE BLOG - POST
export async function POST(request: Request) {
  try {
    const newBlog = await request.json();

    // Validaciones básicas
    if (!newBlog.title || !newBlog.slug || !newBlog.content) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const data = await readBlogsData();

    // Verificar si el slug ya existe
    if (data.blogs.some((blog: any) => blog.slug === newBlog.slug)) {
      return NextResponse.json(
        { error: "Ya existe un blog con este slug" },
        { status: 400 }
      );
    }

    // Generar ID único
    const newId = Math.max(...data.blogs.map((blog: any) => blog.id), 0) + 1;

    // Crear el objeto blog completo
    const blogToAdd = {
      ...newBlog,
      id: newId,
      date: new Date().toISOString(),
    };

    // Agregar a la lista
    data.blogs.push(blogToAdd);

    // Guardar
    const success = await writeBlogsData(data);

    if (!success) {
      return NextResponse.json(
        { error: "Error al guardar el blog" },
        { status: 500 }
      );
    }

    return NextResponse.json(blogToAdd, { status: 201 });
  } catch (error) {
    console.error("Error en POST /api/blogs:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

