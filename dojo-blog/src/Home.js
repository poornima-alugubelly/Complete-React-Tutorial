import { useEffect, useState } from "react";
import BlogList from "./BlogList";


//to give user a message when the data is taking time to load

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // setTimeout was put just to show real world simulation don't put it in real code
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 1000); // argument for setTimeout
  }, [])

  return (
    <div className="home">
    // just like previous lesson putting conditional check with isPending
      { isPending && <div>Loading...</div> }    
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
