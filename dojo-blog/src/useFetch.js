import { useState, useEffect } from 'react';

// #1 we should first create a function and then put all our code in it this fucntion acts as a hook (and it must always start with 'use'
const useFetch = (url) => {  // #2 we put url here because in the previous lesson we hardcoded the url in the fetch() part but we might use this code for other urls as well
  // so we put it here and also in fetch and also set it as the second parameter [url] below so that whenver url changes it is re-renders
  // #3 we grabbed the states also because they are being updated int he code below
  const [data, setData] = useState(null);   // #4 changed blogs to data because in future we might be using it for other things as well
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {  // as this data variable is local it doesn't clash with the above ones
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])

  return { data, isPending, error };   // now this function should return something
}
 
export default useFetch;
