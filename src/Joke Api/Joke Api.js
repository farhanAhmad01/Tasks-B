import axios from "axios";
import React, { useEffect, useState } from "react";

// An application that fetch joke from an api when you click button joke

const JokeApi = () => {
  const [jokes, setJokes] = useState([]);
  let [condition, setCondition] = useState(false);
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        // console.log(response)
        const data = response.data;
        // console.log(data)
        setJokes(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchJoke();
  }, []);
  console.log(jokes);
  return (
    <div className="main-card">

      {/* HERE IS ISSUE =>  i am not understand how to add button functionality for fetching data */}

      
      <button onClick={() => setCondition(true)}>Joke</button>
      <div>
        <p>{jokes.category}</p>
        <p>
          {jokes.setup} <br /> {jokes.delivery}
        </p>
        <p>{jokes.joke}</p>
      </div>
    </div>
  );
};

export default JokeApi;
