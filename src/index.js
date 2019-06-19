import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.css'

// Components 
import ContenedorDeObjetos from './components/ContenedorDeObjetos/ContenedorObjetos'

export default class Index extends Component {
  render() {
    return (
      <div className={classes.content}>
        <ContenedorDeObjetos />
      </div>
    )
  }
}



const root = document.getElementById("app");
ReactDOM.render(<Index />, root);