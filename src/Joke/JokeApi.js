// import axios from "axios";
// import React, { useEffect, useState } from "react";

// // An application that fetch joke from an api when you click button joke

// const Joke = () => {
//   const [jokes, setJokes] = useState([]);
//   let [condition, setCondition] = useState(false);
//   useEffect(() => {
//     const fetchJoke = async () => {
//       try {
//         const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
//         // console.log(response)
//         const data = response.data;
//         // console.log(data)
//         setJokes(data);
//       } catch (error) {
//         console.log("Error", error);
//       }
//     };

//     fetchJoke();
//   }, []);
//   console.log(jokes);
//   return (
//     <div className="main-card">

//       {/* HERE IS ISSUE =>  i am not understand how to add button functionality for fetching data */}

      
//       <button onClick={() => setCondition(true)}>Joke</button>
//       <div>
//         <p>{jokes.category}</p>
//         <p>
//           {jokes.setup} <br /> {jokes.delivery}
//         </p>
//         <p>{jokes.joke}</p>
//       </div>
//     </div>
//   );
// };

// export default Joke;


import React, { useState } from "react";


// clean simple code 😂

const JokeApi = () => {
  const [joke, setJoke] = useState([]); // I set {} as initial state because i know the response from an api is single  object .

  // You did n't need useEffect bcz you need event listener  when button got triggered then function will call api get data and set to the state .

  // Note : use Effect only need when you want to do like when component render then i want to call api any other stuff like side effects or when state change then use effect is helpful.

  const fetchData = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    setJoke(data);
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Fetch Joke</button>

      {/* {/ show joke  /} */}

      <h1>Joke : {joke.joke}</h1>
      <p>Type : {joke.type}</p>
      <p>category : {joke.category}</p>
    </div>
  );
};

export default JokeApi;