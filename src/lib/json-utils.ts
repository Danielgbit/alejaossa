import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd(), "src", "data", "blogs.json");

async function readBlogsData() {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blogs data:", error);
    return { blogs: [] };
  }
};

async function writeBlogsData(data: any) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filepath, jsonData, 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing blogs data:', error);
    return false;
  }
}

export { readBlogsData, writeBlogsData };
