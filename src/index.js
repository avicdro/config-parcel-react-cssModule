import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import "normalize.css"
import styled from './index.module.css'
// Components 
import App from './App.js'
import ContenedorDeObjetos from './components/ContenedorDeObjetos/ContenedorObjetos'

export default class Index extends Component {
  render() {
    return (
      <div className={styled.content}>
        <App />
        <ContenedorDeObjetos />
      </div>
    )
  }
}



const root = document.getElementById("app");
ReactDOM.render(<Index />, root);