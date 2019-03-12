import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import TourList from './TourList/TourList'
import '../../resources/sass/App.scss'
export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    )
  }
}