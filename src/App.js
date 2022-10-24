import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countdown></Countdown>
    </div>
  );
}
function Countdown(){
  const [count ,setCount] =useState(55)
    const increaseValue = () =>{
      const newCount = count +1;
      setCount(newCount);
     {/* Process:
      (1)এটা initial value holo 55;
      (2)newCount দিয়ে count এর মান বাড়ানো হচ্ছে */}
    }

    const decreaseValue=() =>{
      setCount(count-1) //short cut 
    }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseValue}>Increase</button> <br />
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  )
}
export default App;
