import { Blog } from "@/types/blog";
import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd(), "src", "data", "blogs.json");

async function readBlogsData() {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blogs data:", error);
    // Crea el archivo si no existe
    if (error) {
      const defaultData = { blogs: [] };
      fs.writeFileSync(filepath, JSON.stringify(defaultData, null, 2));
      return defaultData;
    }
    return { blogs: [] };
  }
}

async function writeBlogsData(data: Blog) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filepath, jsonData, "utf8");
    return true;
  } catch (error) {
    console.error("Error writing blogs data:", error);
    return false;
  }
}

export { readBlogsData, writeBlogsData };
