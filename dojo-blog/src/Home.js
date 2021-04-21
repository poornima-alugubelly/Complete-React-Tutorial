import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null); // #3 we would like to save this error state and display it to the browser

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) { // #2 error coming back from server, we check the status of the request and if is not ok(false) we throw error and this error with the message attached 
                       // will be caught by the catch below
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
        setError(null);  // #6 if we get data again after subsequent fetches we want to remove the previous error so changing it to null here if we do get data
      })
      .catch(err => {
        // #1 auto catches network / connection error
        // but what if  we still get connected to the server it's just that the server doesn't send any data back and the status is different for that case we wrote the if part
        setIsPending(false);  // #5 we don't want to show loading message if there's an error
        setError(err.message);   // #4 if there is error we change state 
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { error && <div>{ error }</div> }  // #7 displaying error to the browser
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
