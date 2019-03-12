import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../resources/sass/index.scss'
import ErrorBoundary from './components/ErrorBoundary'
import App from './components/App'


ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>, document.getElementById('app'))