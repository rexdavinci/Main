import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../resources/sass/App.scss'


const Person = ({img,name,age}) => {
  return(
    <div>
      <img src={img} alt="person"/>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
    </div>
  )
}

Person.propTypes = {
  img: PropTypes.string,
  age: PropTypes.string,
  age: PropTypes.number,
  name: PropTypes.string
}
class PersonList extends Component{
  state={
    people:[
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
        name: "John",
        age: "Brown"

      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
        name: 14,
        age: 32

      }
    ]
  }
  render(){
    return(
      <div>
        {this.state.people.map(person=> {
          return(
            <Person key={person.id} name={person.name} img={person.img} age={person.age}/>
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