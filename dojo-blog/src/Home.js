import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  // now we are going to fetch data for that we will use fake json server first create db.json file inside data folder in the json file the top most element is called the 
  // resoource and using that we try to use create end point and use the data 
  // The we should use json server packet to watch this data and unpack it we can do it either locally or by using npx
  // second method is preferred --> open new terminal ---> npx json-server --watch data/db.json --port 8000 press enter now this will watch the db.json file 
  //and wrap it in endpoints
  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
    </div>
  );
}
 
export default Home;
