import { useEffect, useState } from "react";
import BlogList from "./BlogList";


// useEffect fires for after every render, suppose we want it to render only after certain times to achieve that we can use a dependency array which is
  // passed as a second argument in useEffect array 
  //useEffect(() => {
 //  console.log('use effect ran');
 //  console.log(blogs);
  //  }, [name])
 // an empty array makes sure that the hook function runs only after the first initial render after that it won't run after the state changes

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  // now suppose we want to use useEffect whenever the name changes then we put name as a dependecy as below
  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  
  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name]) //name change dependecy

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
    </div>
  );
}
 
export default Home;
