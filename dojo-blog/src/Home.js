import { useEffect, useState } from "react";
import BlogList from "./BlogList";
// what if all the things we did in the previous lesson fetching, setting state and error handlers we want to do it in another part of our program too, then we will 
// have to write it again so we externalize our code by writing it in a separate js file and importing it where we need this is called using Custom Hooks
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
