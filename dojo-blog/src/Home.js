import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  // useEffect hook is executed at every re-render, it is useful in cases like where we want to fetch data and so on
  // be careful about using useState inside useEffect because it will cause an infinite loop, when program renders initially useEffect is called then useSte inside it is called 
  // which causes re-render then useEffect is called again and so on and so forth
  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;
