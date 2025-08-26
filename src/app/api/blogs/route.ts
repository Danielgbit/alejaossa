// src/app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { readBlogsData, writeBlogsData } from "@/lib/json-utils";
import {  } from '@/services/blogService';

export async function GET() {
  try {
    const data = await readBlogsData();
    return NextResponse.json(data.blogs); // ← ¡IMPORTANTE! Devuelve data.blogs, no data
  } catch (error) {
    return NextResponse.json({ error: "Error reading blogs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
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
    
    // Crear nuevo blog con ID único y slug
    const blogWithId = {
      id: Date.now(),
      ...newBlog,
      slug: newBlog.slug, // Generar slug si no existe
      date: new Date().toISOString().split('T')[0],
      author: newBlog.author || 'Anonymous' // Valor por defecto
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