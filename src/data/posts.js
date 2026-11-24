// Single place that reads the JSON. If your real posts.json uses different
// field names, map them here and nothing else in the app needs to change.
import raw from "./posts.json";

export const posts = raw.map((p) => ({
  id: p.id,
  slug: p.slug ?? String(p.id),
  title: p.title,
  excerpt: p.excerpt ?? "",
  content: Array.isArray(p.content) ? p.content : [p.content ?? ""],
  category: p.category,
  image: p.image,
  date: p.date,
  readTime: p.readTime ?? 5,
  author: p.author ?? { name: "فريق عدسة", role: "" },
}));

export const categories = [...new Set(posts.map((p) => p.category))];

export const formatDate = (d) =>
  new Date(d).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });
