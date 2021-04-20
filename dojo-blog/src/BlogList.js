const BlogList = ({ blogs, title}) => {  // we can use BlogList = {(props)} as well then all the items we send will be attached to it and we use it as commented below
                                         // or we can use what all we need directly like this 
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(blogs);

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;
