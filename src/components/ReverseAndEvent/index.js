import React,{useState} from 'react'

const ReverseString = () => {

    const [istring,setiString] = useState('')

    const ReverseString = () =>{
        let revStr = istring.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
        return revStr;
    }

    const handleMouseEnter = e =>{
        // console.log("Mouse event is called!")
        e.target.style.background = "grey"
    }

    const handleMouseLeave = e => {
        e.target.style.background = "pink"
      }

  return (
    <div>
        <input type="text"
        value={istring}
        onChange={(e)=>{setiString(e.target.value)}}
        />
        <br />
        <br />
        <br />
      <span>{istring}</span>  
        <br />
        <br />
        <br />
      <span  
      style={{backgroundColor:'pink'}}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      > {ReverseString()} </span> 
    </div>
  )
}

export default ReverseString