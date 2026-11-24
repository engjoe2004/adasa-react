import { Link } from "react-router-dom";
import PostCard from "../components/PostCard.jsx";
import { posts, categories } from "../data/posts.js";

export default function Home() {
  const featured = posts[0];
  const latest = posts.slice(1, 4);
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="pill">مرحباً بك في عدسة</span>
          <h1>اكتشف <span className="accent">فن</span> التصوير الفوتوغرافي</h1>
          <p className="lead">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
          <div className="hero-actions">
            <Link to="/blog" className="btn btn-primary">استكشف المقالات ←</Link>
            <Link to="/about" className="btn btn-ghost">اعرف المزيد</Link>
          </div>
          <div className="stats">
            <div><strong>{posts.length}+</strong><span>مقالة</span></div>
            <div><strong>{categories.length}</strong><span>تصنيفات</span></div>
            <div><strong>10+ ألف</strong><span>قارئ</span></div>
            <div><strong>6</strong><span>كتّاب</span></div>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">مقالات مختارة</h2>
        <PostCard post={featured} view="list" />
      </section>

      <section className="container section">
        <h2 className="section-title">التصنيفات</h2>
        <div className="cat-grid">
          {categories.map((c) => (
            <Link key={c} to={`/blog?category=${encodeURIComponent(c)}`} className="cat-card">
              <strong>{c}</strong>
              <small>{posts.filter((p) => p.category === c).length} مقالات</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">أحدث المقالات</h2>
          <Link to="/blog" className="read-more">عرض الكل ←</Link>
        </div>
        <div className="grid">{latest.map((p) => <PostCard key={p.id} post={p} />)}</div>
      </section>

      <section className="container section">
        <form className="newsletter" onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert("شكراً لاشتراكك!"); }}>
          <h2>اشترك في نشرتنا الإخبارية</h2>
          <p className="muted">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني.</p>
          <div className="nl-row">
            <input type="email" required placeholder="أدخل بريدك الإلكتروني" />
            <button className="btn btn-primary">اشترك الآن</button>
          </div>
        </form>
      </section>
    </>
  );
}
