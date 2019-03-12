import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null
  }
  componentDidCatch = (error, info) => {
    this.setState({
      error:error,
      info:info
    })
    // You can log error to the error reporting service here
  }
  render() {
    if(this.state.error) {
      // Some error was thrown. Let's display something helpful to the user
      return (
        <div>
          <h5>Sorry. More than five characters!</h5>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.info.componentStack}
          </details>
        </div>
      );
    }
    // No errors were thrown. As you were.
    return this.props.children;
  }
}
