import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import PostCard from "../components/PostCard.jsx";
import { posts, formatDate } from "../data/posts.js";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />; // unknown post => 404

  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);
  return (
    <>
      <article className="container article">
        <Link to="/blog" className="read-more">→ العودة إلى المدونة</Link>
        <span className="badge static">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="meta">
          <span>{post.author.name}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime} دقائق للقراءة</span>
        </div>
        <img className="article-img" src={post.image} alt={post.title} />
        <p className="lead">{post.excerpt}</p>
        {post.content.map((para, i) => <p key={i}>{para}</p>)}
        <div className="author box">
          <span className="avatar">{post.author.name[0]}</span>
          <div><strong>{post.author.name}</strong><small>{post.author.role}</small></div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="container section">
          <h2 className="section-title">مقالات ذات صلة</h2>
          <div className="grid">{related.map((p) => <PostCard key={p.id} post={p} />)}</div>
        </section>
      )}
    </>
  );
}
