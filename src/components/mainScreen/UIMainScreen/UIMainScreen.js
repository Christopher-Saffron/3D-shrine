
import React from 'react'
import './styles.scss'


const UIMainScreen = ({setMainContent, setnewCameraArgs}) => {

    // const setNewCameraPosition = (target) => {
    //   ////remove last selected
    //   document.querySelectorAll('.navigation_li_current').forEach((element) => {element.classList.remove('navigation_li_current')})

    //   //// add class to current
    //   if (target !== 'reset') {
    //     const newSelected = document.querySelector(`[data-value="${target}"]`)
    //     newSelected.classList.add('navigation_li_current')
    //   }
    // }

    // const returnToNullState = () => {
    //   document.querySelector('.contentHolder').classList
    // }

    return (
      <div className='interface__right_holder' style={{display: 'none'}}>
        
        <h3 onClick={(e) => { setnewCameraArgs([.5, 1.15, 4.95, 0 ,Math.PI / 2, 0, 80, null])}}>Navigation</h3>
        <ul>
          <li data-value='webdev' onClick={(e) => { setnewCameraArgs([-2.3, 1.48, 5.95, .3, Math.PI, 0, 80, 'WEBDEV'])}}>
            {/* <input className='interface__right_radio' type='radio' /> */}
            {/* <span className='checkmark'></span> */}
            <span className='destination'>WEBDEV</span>
          </li>
          <li data-value='objects' onClick={(e) => { setnewCameraArgs([-6.3, 1.4, 7.4, .2, 3.7, .1, 50, 'MODELS'])}}>
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>3D OBJECTS</span>
          </li>
          <li data-value='videos' onClick={(e) => { setnewCameraArgs([-2.6, 1.78, 3.15, -.3, 0, 0, 90, 'VIDEOS'])}}>
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>VIDEOS</span>
          </li>
          <li data-value='bricscad' onClick={(e) => { setnewCameraArgs([-9.7, 1.95, 9.5, -1, Math.PI /5, .9, 60, 'BRICSCAD'])}}>
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>BRICSCAD</span>
          </li>
          <li data-value='unity' onClick={(e) => { setnewCameraArgs([-10.4, 1.25, 4.8, 0, 0, 0, 50, 'UNITY'])}}>
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>UNITY</span>
          </li>
          <li data-value='languages' onClick={(e) => { setnewCameraArgs([-9.7, 1.95, 14.9, -1, Math.PI /5, .9, 60, 'LANGUAGES'])}}>
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>LANGUAGES</span>
          </li>
          <li data-value='blog' onClick={(e) => { setnewCameraArgs([-6.5, 1.6, 5.5, 0, 0, 0, 50, 'BLOG'])}}>
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>BLOG</span>
          </li>
          <li data-value='resume' onClick={(e) => {setnewCameraArgs([-7.9, 2, 5.5, 1.2, 0, 0, 80, 'RESUME'])}}>
          {/* <li data-value='unity' onClick={(e) => {setNewCameraPosition('unity');  setnewCameraArgs([-10.4, 1.25, 4.8, -.3, Math.PI /1, -.3, 40])}}> */}
            {/* <input className='interface__right_radio' type='radio' />
            <span className='checkmark'></span> */}
            <span className='destination'>RESUME</span>
          </li>
        </ul>
        <div className='interface__right_text'>
          <h2>ナビゲーション</h2>
        </div>
  
        <div className='interface__right_showMenuButton'>
          
        </div>
      </div>
    )
  }

export default UIMainScreen