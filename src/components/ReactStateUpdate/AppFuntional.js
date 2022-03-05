import {useState} from 'react'

function AppFunctional() {
    const [count, setCount] = useState(0);
    const handleClick = async () => {
      console.log("Functional:Count before update", count);
      await setCount(count + 1);
      console.log("Functional:Count post update", count);
    };
    return (
      <div className="container">
        <h1>Hello Functional Component!</h1>
        <p>Press button to see the magic :)</p>
        <button onClick={handleClick}>Increment</button>
        {!!count && (
          <div className="message">You pressed button {count} times</div>
        )}
      </div>
    );
  }

  export default AppFunctional;