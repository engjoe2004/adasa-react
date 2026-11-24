import { Link } from "react-router-dom";
import { formatDate } from "../data/posts.js";

export default function PostCard({ post, view = "grid" }) {
  return (
    <article className={`card ${view === "list" ? "card-list" : ""}`}>
      <Link to={`/blog/${post.slug}`} className="card-img">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="badge">{post.category}</span>
      </Link>
      <div className="card-body">
        <div className="meta">
          <span>{post.readTime} دقائق للقراءة</span>
          <span>{formatDate(post.date)}</span>
        </div>
        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p className="muted">{post.excerpt}</p>
        <div className="card-foot">
          <div className="author">
            <span className="avatar">{post.author.name[0]}</span>
            <div><strong>{post.author.name}</strong><small>{post.author.role}</small></div>
          </div>
          <Link to={`/blog/${post.slug}`} className="read-more">اقرأ المقال ←</Link>
        </div>
      </div>
    </article>
  );
}
