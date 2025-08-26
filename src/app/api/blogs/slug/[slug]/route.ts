// src/app/api/blogs/slug/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { readBlogsData } from "@/lib/json-utils";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    console.log("Buscando blog con slug:", slug);
    
    const data = await readBlogsData();
    console.log("Datos leídos:", data);
    
    // Buscar el blog por slug
    const blog = data.blogs.find((b: any) => b.slug === slug);
    
    if (!blog) {
      console.log("Blog no encontrado para slug:", slug);
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    console.log("Blog encontrado:", blog);
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error en GET /api/blogs/slug/[slug]:", error);
    return NextResponse.json(
      { error: 'Error reading blog' },
      { status: 500 }
    );
  }
}