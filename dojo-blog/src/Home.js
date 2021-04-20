import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  //we saw that in the previous code the blog part was here what if we want to reuse it? for that purpose we created the blogList file
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" /> // the blogs= {blogs} oart is called sending the prop because if we directly use the blog code in bloglist file we get error
                                                   // as it doesn't know the blogs object
    </div>
  );
}
 
export default Home;
