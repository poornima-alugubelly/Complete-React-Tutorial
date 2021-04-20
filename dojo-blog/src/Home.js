import { useState } from "react";
import BlogList from "./BlogList";

// #1  we want to create a feature of delete blog button

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  
  // if id doesn't match then it is kept if it matches then removed, a new array based on this is created into newBlogs
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
    
    // here we pass handleDelete function as prop , we get doubt that y didn't we write this function in bloglist.js , but the data is here and we shud use that useState 
    //for updation so we wrote it here.
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;
