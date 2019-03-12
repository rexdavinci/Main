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
          <h3>Something went wrong!</h3>
          <br />
          <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
            {this.state.info.componentStack}
          </details>
        </div>
      );
    }
    // No errors were thrown. As you were.
    return this.props.children;
  }
}
