import { useState } from "react"; // #3 have to import the hook

const Home = () => {
  // let name = 'mario'; #1 suppose we declared a variable  likes this
  
  const [name, setName] = useState('mario'); // first thing [name] is the value seconf thing is the fucntion to change it, parameter in useState is the intital value
   const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';  #2 and we tried to change this like this if we see the home page now we will still see mario only beacuse the variable we created is not reactive 
    // means react does'nt look at it for changes in state and hence the template is not updated and we have to make the value reactive so that react will see it and
    // re render the template in the browser and for that we use a hook , hook is a special type of function that does a certain job it starts with use here we use useState hook 
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;
