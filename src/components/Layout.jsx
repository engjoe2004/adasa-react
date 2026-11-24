import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { categories } from "../data/posts.js";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollTop />
      <header className="nav">
        <div className="container nav-row">
          <Link to="/" className="brand">
            <span className="brand-logo">◉</span>
            <span>
              <strong>عدسة</strong>
              <small>عالم التصوير الفوتوغرافي</small>
            </span>
          </Link>
          <nav className="nav-links">
            <NavLink to="/" end>الرئيسية</NavLink>
            <NavLink to="/blog">المدونة</NavLink>
            <NavLink to="/about">من نحن</NavLink>
          </nav>
          <Link to="/blog" className="btn btn-primary btn-sm">ابدأ القراءة</Link>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3 className="brand-name">عدسة</h3>
            <p className="muted">مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك فيها أسرار المحترفين ونصائح عملية.</p>
          </div>
          <div>
            <h4>استكشف</h4>
            <Link to="/">الرئيسية</Link>
            <Link to="/blog">المدونة</Link>
            <Link to="/about">من نحن</Link>
          </div>
          <div>
            <h4>التصنيفات</h4>
            {categories.map((c) => (
              <Link key={c} to={`/blog?category=${encodeURIComponent(c)}`}>{c}</Link>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 عدسة. جميع الحقوق محفوظة.</span>
          <span><Link to="/privacy">سياسة الخصوصية</Link> · <Link to="/terms">شروط الاستخدام</Link></span>
        </div>
      </footer>
    </>
  );
}
