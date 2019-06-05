import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.css'

export default class Index extends Component {
  render() {
    return (
      <div className={classes.content}>
          Hola mundoasd
      </div>
    )
  }
}
const root = document.getElementById("app");

ReactDOM.render(<Index />, root);