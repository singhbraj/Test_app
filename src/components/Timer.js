import React, { Component } from 'react'
import './App.css'


let interval

class Timer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
          }
  }

  componentDidMount = () =>{

    this.setTimer()

    // let i =1

  }

  setTimer = () =>{
    interval = setInterval(()=>{
      if(this.state.count<=9)
      {
          this.setState({count:this.state.count+1})
          // console.log(i++)
      }
      else
      {
        clearInterval(interval)
      }

    },2000)
  }
  
  handleStop=()=>{
    clearInterval(interval)
  }
  handleStart=()=>{
    // clearInterval(interval)
    // setTimeout(interval,2000)
    this.setTimer()
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.count!=0?this.state.count:null}</h3>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleStart}>Start</button>
      </div>
    )
  }
}

export default Timer
