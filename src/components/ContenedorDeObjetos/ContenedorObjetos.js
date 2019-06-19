import React, { Component } from 'react'
import anime from 'animejs'
import { Balon1, Balon2, ContentElements, Suelo } from './ContenedorObjs.module.css'


import "@babel/polyfill";




function crearObjetos(tag, cant) {
  let list = [];
  let cont = 0;
  while (cant > cont) {
    list.push(tag)
    cont++
  }
  return list;
}


class ContenedorObjetos extends Component {


  componentDidMount() {
    // Cosas a animar

    const animation = anime({
      targets: `.${Balon1}`,
      translateY: 1000,
      // translateX: 500,
      delay: function (el, i) { return i * 100; },
      elasticity: 200,
      easing: "easeInOutSine",
      autoplay: false,
    })

    // Control Scroll
    window.onscroll = function () {
      animation.seek(animation.duration * (window.scrollY / 350))
    }

    const myPath = anime.path(".svgCaja path")

    anime({
      targets: `.svgCaja .${Balon2}`,
      translateX: myPath('x'),
      translateY: myPath('y'),
      rotate: myPath('angle'),
      easing: 'easeInOutSine',
      duration: 20000,
      loop: true
    })
    anime({
      targets: `.svgCaja path`,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 20000,
      delay: function (el, i) { return i * 250 },
      loop: true
    })

  }

  render() {
    const mesa = crearObjetos(<div className={Balon1}></div>, 5000)

    return (
      <div>
        <div className={ContentElements}>
          {mesa.map((el, index) => {
            return (
              <React.Fragment key={index}>
                {el}
              </React.Fragment>
            )
          })}
        </div>
        <div className={Suelo}></div>

        <div className="svgCaja">
          <div className={Balon2}></div>
          <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}
            <path id="svg_3" d="m46.5,120.4375c0,0 16,0 15.5,-0.4375c0.5,0.4375 27.5,225.4375 27,225c0.5,0.4375 13.5,1.4375 13,1c0.5,0.4375 17.5,-224.5625 17,-225c0.5,0.4375 16.5,0.4375 16,0c0.5,0.4375 -6.5,231.4375 -4.5,231.4375c2,0 21,-5 20.5,-5.4375c0.5,0.4375 10.5,-231.5625 10,-232c0.5,0.4375 105.5,2.4375 105,2c0.5,0.4375 -0.5,20.4375 -1.5,20.4375c-1,0 -92,-3 -92.5,-3.4375c0.5,0.4375 -6.5,208.4375 -6.5,209.4375c0,1 114,2 113.5,1.5625c0.5,0.4375 6.5,-254.5625 4.5,-254.5625c-2,0 -129,-1 -129.5,-1.4375c0.5,0.4375 -5.5,-22.5625 -6,-23c0.5,0.4375 252.5,6.4375 252,6c0.5,0.4375 1.5,8.4375 1,8c0.5,0.4375 -98.5,5.4375 -98.5,5.4375c0,0 -8,268 -7,268c1,0 20,-6 20,-5c0,1 4,-226 5,-226c1,0 130,-1 129.5,-1.4375c0.5,0.4375 -5.5,210.4375 -6.5,210.4375c-1,0 -103,-8 -103.5,-8.4375c0.5,0.4375 6.5,-173.5625 6.5,-173.5625c0,0 -11,-1 -11.5,-1.4375c0.5,0.4375 -0.5,201.4375 -1,201c0.5,0.4375 128.5,-2.5625 128,-3c0.5,0.4375 1.5,-221.5625 1,-222c0.5,0.4375 58.5,-1.5625 58,-2c0.5,0.4375 -31.5,125.4375 -31.5,126.4375c0,1 63,95 62.5,94.5625c0.5,0.4375 -36.5,-0.5625 -37.5,-0.5625c-1,0 -31,-55 -31.5,-55.4375c0.5,0.4375 -0.5,72.4375 -1,72c0.5,0.4375 -434.5,-3.5625 -435,-4c0.5,0.4375 -0.5,-234.5625 -0.5,-234.5625z" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5"
              strokeDashoffset="1000" stroke="#000" fill="#fff" />
          </svg>
        </div>
      </div>
    )
  }
}
export default ContenedorObjetos