import axios from "axios";
import React, { useState, useEffect } from "react";

function Joke() {

const [joke, setJoke] = useState('');

useEffect(() => {
    axios
    .get('https://icanhazdadjoke.com/', {headers : {Accept:'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
}, [])

function handleJokeRefresh() {
    axios
    .get('https://icanhazdadjoke.com/', {headers : {Accept:'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
}

    return (
    <div className="mt-5">
      <div className="card">
        <div className="card-header">Dad Joke 🤣 </div>
        <div className="card-body">
          <p className="card-text">
           {joke.joke}
          </p>
          <button onClick={handleJokeRefresh} href="#" className="btn btn-primary">
            Get another joke
          </button>
        </div>
      </div>
    </div>
  );
}

export default Joke;
