import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
      hasError: false,
      info: '',
      error: ''
    }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      info: info,
      error: error
    })
  }
  render() {
    if(this.state.hasError){
      return <div><h1>Caught by Error Boundary</h1></div>
    }
    return this.props.children
  }
}
