import React, { useState,useEffect } from "react";

const Scrolling = () => {
  const [state, setState] = useState(0);
  const listener = () => {
    console.log(`State: ${state}`);
  };
  useEffect(() => {
    inCrementFive()
  }, [state]);

  const inCrementFive = () =>{
      setState((state)=>state+5)
    // window.addEventListener("scroll", listener);


      
  }

  return <div>Scrolling- {state}</div>;
};

export default Scrolling;
