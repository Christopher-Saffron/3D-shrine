
import React from 'react'
import './styles.scss'


const UIMainScreen = ({ setnewCameraArgs}) => {

    return (
      <div className='interface__right_holder' style={{display: 'none'}}>
        
        <h3 onClick={(e) => { setnewCameraArgs([.5, 1.15, 4.95, 0 ,Math.PI / 2, 0, 80, null])}}>Navigation</h3>
        <ul>
          <li data-value='webdev' onClick={(e) => { setnewCameraArgs([-2.3, 1.48, 5.95, .3, Math.PI, 0, 80, 'WEBDEV'])}}>
            <span className='destination'>WEBDEV</span>
          </li>
          <li data-value='objects' onClick={(e) => { setnewCameraArgs([-6.3, 1.4, 7.4, .2, 3.7, .1, 50, 'MODELS'])}}>
            <span className='destination'>3D OBJECTS</span>
          </li>
          <li data-value='videos' onClick={(e) => { setnewCameraArgs([-2.6, 1.78, 3.15, -.3, 0, 0, 90, 'VIDEOS'])}}>
            <span className='destination'>VIDEOS</span>
          </li>
          <li data-value='bricscad' onClick={(e) => { setnewCameraArgs([-9.7, 1.95, 9.5, -1, Math.PI /5, .9, 60, 'BRICSCAD'])}}>
            <span className='destination'>BRICSCAD</span>
          </li>
          <li data-value='unity' onClick={(e) => { setnewCameraArgs([-10.4, 1.25, 4.8, 0, 0, 0, 50, 'UNITY'])}}>
            <span className='destination'>UNITY</span>
          </li>
          <li data-value='Skills' onClick={(e) => { setnewCameraArgs([-9.7, 1.95, 14.9, -1, Math.PI /5, .9, 60, 'SKILLS'])}}>
            <span className='destination'>SKILLS</span>
          </li>
          <li data-value='blog' onClick={(e) => { setnewCameraArgs([-6.5, 1.6, 5.5, 0, 0, 0, 50, 'BLOG'])}}>
            <span className='destination'>BLOG</span>
          </li>
          <li data-value='resume' onClick={(e) => {setnewCameraArgs([-7.9, 2, 5.5, 1.2, 0, 0, 80, 'RESUME'])}}>
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