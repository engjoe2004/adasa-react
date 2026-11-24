export default function Pagination({ page, total, onChange }) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <nav className="pagination" aria-label="التنقل بين الصفحات">
      <button disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="السابق">›</button>
      {pages.map((n) => (
        <button key={n} className={n === page ? "active" : ""} onClick={() => onChange(n)}>{n}</button>
      ))}
      <button disabled={page === total} onClick={() => onChange(page + 1)} aria-label="التالي">‹</button>
      <p className="muted">صفحة {page} من {total}</p>
    </nav>
  );
}
