// accepted handleDelete as a prop
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
    // on clicking the delete blog button , the blog is deleted based on its id
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;
