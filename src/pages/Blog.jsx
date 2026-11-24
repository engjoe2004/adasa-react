import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PostCard from "../components/PostCard.jsx";
import Pagination from "../components/Pagination.jsx";
import { posts, categories } from "../data/posts.js";

const PER_PAGE = 6;

export default function Blog() {
  // All state lives in the URL so links can be shared and the back button works.
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const view = params.get("view") === "list" ? "list" : "grid";
  const page = Math.max(1, Number(params.get("page")) || 1);

  const update = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    if (!("page" in changes)) next.delete("page"); // reset to page 1 on any filter change
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (!category || p.category === category) &&
        (!term || p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term))
    );
  }, [q, category]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const current = Math.min(page, Math.max(totalPages, 1));
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const hasFilters = q || category;

  return (
    <section className="container section">
      <div className="page-head">
        <h1>استكشف مقالاتنا</h1>
        <p className="muted">اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الحديث.</p>
      </div>

      <div className="toolbar">
        <input
          type="search"
          className="search"
          placeholder="ابحث في المقالات..."
          value={q}
          onChange={(e) => update({ q: e.target.value })}
        />
        <select className="select" value={category} onChange={(e) => update({ category: e.target.value })} aria-label="التصنيف">
          <option value="">جميع المقالات</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <div className="view-toggle" role="group" aria-label="طريقة العرض">
          <button className={view === "grid" ? "active" : ""} onClick={() => update({ view: "", page: "" })} aria-label="عرض شبكي">▦</button>
          <button className={view === "list" ? "active" : ""} onClick={() => update({ view: "list", page: "" })} aria-label="عرض قائمة">☰</button>
        </div>
      </div>

      <p className="count">
        عرض <strong>{filtered.length}</strong> مقالات{category && <> في <span className="accent">{category}</span></>}
        {hasFilters && <button className="clear" onClick={() => setParams({})}>✕ مسح الفلاتر</button>}
      </p>

      {visible.length ? (
        <div className={view === "list" ? "list" : "grid"}>
          {visible.map((p) => <PostCard key={p.id} post={p} view={view} />)}
        </div>
      ) : (
        <div className="empty">لا توجد مقالات مطابقة لبحثك. جرّب كلمات أخرى أو امسح الفلاتر.</div>
      )}

      <Pagination page={current} total={totalPages} onChange={(n) => update({ page: String(n) })} />
    </section>
  );
}
