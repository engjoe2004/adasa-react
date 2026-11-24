import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container notfound">
      <h1>404</h1>
      <h2>الصفحة غير موجودة</h2>
      <p className="muted">الرابط الذي تحاول الوصول إليه غير موجود أو تم نقله.</p>
      <div className="hero-actions">
        <Link to="/" className="btn btn-primary">العودة للرئيسية</Link>
        <Link to="/blog" className="btn btn-ghost">تصفح المدونة</Link>
      </div>
    </section>
  );
}
