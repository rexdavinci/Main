import React, { Component } from 'react'
import '../../../resources/sass/TourList.scss'
import Tour from '../Tour/Tour'
import {tourData} from '../../../resources/tourData'
export default class TourList extends Component {
  state={
    tours: tourData
  }
  removeTour = id => {
    const{tours} = this.state
    const filteredTours = tours.filter(tour=>{
      return tour.id !==id
    })
    this.setState({
      tours: filteredTours
    })
  }
  render() {
    const {tours} = this.state
    return (
        <section className="tourList">
        {tours.map(tour=>{
          return(
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
          )
        })}
        </section>
    )
  }
}
