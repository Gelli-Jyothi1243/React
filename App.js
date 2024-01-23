import React,{useState} from 'react';

const App = () => {
  const [count,setCount]=useState(0);
  const update=()=>{
    setCount(count+1);
    
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={update}>Increment</button>
    </div>
  )
};      

export default App;