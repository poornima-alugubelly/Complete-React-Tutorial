import { useEffect, useState } from "react";
import BlogList from "./BlogList";
// what if all the things we did in the previous lesson fetching, setting state and error handlers we want to do it in another part of our program too, then we will 
// have to write it again so we externalize our code by writing it in a separate js file and importing it where we need this is called using Custom Hooks which is in useFetch.js
import useFetch from "./useFetch";

const Home = () => {
  // we could use an array to get the objects as well but if we use objects like this 1) order won't matter 2) we can use say isPending without the other
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs') // data: blogs means call the data as blogs in thi code

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
