import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  }
  componentDidCatch = (error, errorInfo) => {
    this.setState({
      error,
      errorInfo
    })
    // You can log error to the error reporting service here
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Failed to render</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Error Details:</p>
            <p>{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
