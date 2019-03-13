import React, { Component } from 'react'
import '../../resources/sass/App.scss'

class ControlledInputs extends Component{
  state={
    text:''
  }
  handleChange= e=> {
    const name = e.target.name
    const value = e.target.value.toUpperCase()

    this.setState({
      text: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.text.toUpperCase())
  }
  render(){
    return(
      <form style={{margin: "3rem"}} onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.text} type="text" name="firstname"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}



class UncontrolledInputs extends Component{
  handleSubmit= (e) => {
    e.preventDefault()
    console.log(this.firstname.value)
    console.log(this.text.textContent)
  }
  render(){
    return(
      <form style={{margin: "3rem"}}>
        <input type="text" name="firstname" ref={(item)=>this.firstname =item}/>
        <button onClick={this.handleSubmit}type="submit">Submit</button>
        <p ref={(input)=>this.text = input}>Hello World</p>
      </form>
    )
  }
}











export default class App extends Component {

  render() {
    return (
      <div>
        <ControlledInputs/>
        <hr/>
        <UncontrolledInputs />
      </div>
    )
  }
}