
import './App.css';
import React from 'react';
import Greet from './Greet';

function App() {
function greet(user){
  if(user){
    return <h1>Good Morning {user}! </h1>
  }
  else{
    return <h1>Good Morning Stranger!</h1>
  }
}

function PrintDay(day){
  return <p>Today is {day}</p>
}

let title = "Introduction to Hooks!";
  return (
  <>

   <div>{PrintDay("Monday")}</div>


  </>
  );
}

export default App; 