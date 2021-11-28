import React, {useState} from 'react';
import Hello from './sayHello';
import Tweet from "./Tweet";

function App(){

const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  setRed(!isRed);
}

  return(
    <div className="app">
      <h1>This is the app component</h1>
      <br/>

      <Hello />
      <br/>

      <Tweet name="Kevin" message="This is a random tweet" likes="700"/>
      <Tweet name="John" message="Welcome to React" likes="3.5k"/>
      <Tweet name="Ed" message="This is my first React App" likes="5k"/>

      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
