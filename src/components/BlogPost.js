import { formatBlogDate } from '../data/blogPosts';

// ...existing code...

const BlogPost = () => {
  // ...existing code...
  
  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
      // ...existing code...
    </article>
  );
};

export default BlogPost;