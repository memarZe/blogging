import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="blog-post">
        <h2>Post Not Found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    )
  }

  return (
    <article className="blog-post">
      <Link to="/" className="back-link">← Back to All Posts</Link>
      
      <header className="post-header">
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</time>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-author">By {post.author}</p>
      </header>

      <div className="post-content">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="post-footer">
        <Link to="/" className="back-link">← Back to All Posts</Link>
      </footer>
    </article>
  )
}

export default BlogPost
