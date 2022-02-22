import React, { useMemo,useState } from 'react'
import ChildOne from './ChildOne'

const ParentOne = () => {

    const [counterOne,setCountOne] = useState(0)
    const [counterTwo,setCountTwo] = useState(0); 



    const incrementOne = () => {
      setCountOne(counterOne+1)
    }

    const incrementTwo = () =>{
      setCountTwo(counterTwo+1)
    }

    const isEven = useMemo(() =>{
      let i;
      while(i<900000000000000) i++;
      return counterOne%2 === 0
    },[counterOne])


  return (
    <div>
    <div>
    <button onClick={incrementOne}>Count One-{counterOne}</button>
    <span>{isEven ? 'Even' : 'Odd' } </span>
    </div>
    <div>
    <button onClick={incrementTwo}>Count Two-{counterTwo}</button>
    </div>
    </div>
  )
}

export default ParentOne