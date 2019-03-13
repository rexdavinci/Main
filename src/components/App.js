import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../resources/sass/App.scss'


const Person = ({img,name,age, info}) => {
  return(
    <div>
      <img src={img} alt="person"/>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h5>info: {info}</h5>
    </div>
  )
}

Person.propTypes = {
  img: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}
Person.defaultProps = {
  info: "No info available"
}
class PersonList extends Component{
  state={
    people:[
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
        name: "John",
        age: 31,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto?"
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
        name: "Bob",
        age: 32
      }
    ]
  }
  render(){
    return(
      <div>
        {this.state.people.map(person=> {
          return(
            <Person key={person.id} name={person.name} img={person.img} age={person.age} info={person.info}/>
          )
        })}
      </div>
    )
  }
}
export default class App extends Component {

  render() {
    return (
      <div>
        <PersonList/>
      </div>
    )
  }
}