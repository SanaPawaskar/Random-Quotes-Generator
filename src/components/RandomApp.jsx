import { useState } from 'react';
import { useEffect } from 'react'
import {} from 'react'

const RandomApp = () => {
    const [data , setData]= useState({});
    const [quotes, setQuotes] = useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
     try{
       const url = 'https://dummyjson.com/quotes';
       const response = await fetch(url);
       const res = await response.json();
       setQuotes(res.quotes); // Store the quotes array in state
       setData(res.quotes[0]);
      {console.log(res)}
     }catch(error){
      console.log(error)
     }
    }
    fetchApi();
     },[quotes]);

     const getRandomFunction=()=>{
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setData(quotes[randomIndex]);
     }
  return (
    <div className='container'>
      <h1>Random Quote</h1>
      <h3>{data.quote} </h3>
      <h4>{data.author}</h4>
      <button onClick={getRandomFunction}>New Quote</button>
    </div>
  )
}

export default RandomApp
