import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import './BlogList.css'

function BlogList() {
  return (
    <div className="blog-list">
      <h2 className="page-title">Latest Posts</h2>
      <div className="posts-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="post-card">
            <div className="post-card-header">
              <span className="post-category">{post.category}</span>
              <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>
            <h3 className="post-card-title">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="post-card-excerpt">{post.excerpt}</p>
            <div className="post-card-footer">
              <span className="post-author">By {post.author}</span>
              <Link to={`/post/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogList
