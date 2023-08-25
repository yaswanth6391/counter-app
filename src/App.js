
import  React from "react";
import Counter from "./Counter";



 /*function App() {
  const [Count, setcount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}*/
   
   
    function App() {
     return (
       <div className ="App">
         <h1>counter</h1>
         <Counter/>

       </div>
     );
   }
   

export default App;