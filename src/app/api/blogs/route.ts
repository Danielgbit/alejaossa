import { readBlogsData, writeBlogsData } from "@/lib/json-utils";
import { NextRequest, NextResponse } from "next/server";

async function GET(
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
// POST - Crear nuevo blog
async function POST(request: NextRequest) {
  try {
    const newBlog = await request.json();
    
    // Validaciones básicas
    if (!newBlog.title || !newBlog.content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const data = await readBlogsData();
    
    // Crear nuevo blog con ID único
    const blogWithId = {
      id: Date.now(), // ID simple basado en timestamp
      ...newBlog,
      date: new Date().toISOString().split('T')[0]
    };

    data.blogs.push(blogWithId);
    
    const success = await writeBlogsData(data);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Error saving blog' },
        { status: 500 }
      );
    }

    return NextResponse.json(blogWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating blog' },
      { status: 500 }
    );
  }
}


export { GET, POST };
