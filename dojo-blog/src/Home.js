import { useEffect, useState } from "react";
import BlogList from "./BlogList";

//after doing the steps from last lesson we can see that an endpoint https://localhost:8000/blogs is created if we go to this file we will see the data there are other endpoints
// other end points are provided as well:
//  /blogs      GET       Fetch all blogs
//  /blogs/{id} GET       Fetch a single blog
//  /blogs      POST      Add a new blog
//  /blogs      DELETE    Delete a blog
// so now we have out json server running and watching our files

const Home = () => {
  const [blogs, setBlogs] = useState(null)  // we removed the data as we r trying to get it from json 

  useEffect(() => {
    fetch('http://localhost:8000/blogs')   // this is  a promise // this means a get request to fetch all blogs
      .then(res => {                       // if the data is fetched then we go to then part here res is a response object                    
        return res.json();                 // which is basically the data only to use it we should write res.json() and is this 
                                           // returned 
      
    })
      .then(data => {     // as this is all asynchronous means there will be wait time we write  another function to call it immediately the data is basically the json file data
        setBlogs(data);  // this will not cause an infinite loop as [] is the second parameter
      })
  }, [])

  return (
    <div className="home">
    // why  we added   'blogs &&' initially blogs is null when we first render and so when we try to map thru this null object in bloglist.js we get error this error resolves
    // when the data eventually comes after userEffect gets the data after the first render, so we keep the check to tell to show the page after blogs has values 
      {blogs && <BlogList blogs={blogs} />} 
    </div>
  );
}
 
export default Home;
