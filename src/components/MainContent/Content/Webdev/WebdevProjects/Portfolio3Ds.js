import React from 'react'
import { portfolioheavy2, portfolioheavy1, portfolioheavy3, portfolioheavy4, portfolioheavy5, portfolioheavy6, portfolioheavy7, portfolioheavy8, portfolioheavy10, portfolioheavy9, portfolioheavy11, portfolioheavy12, portfolioheavy13, portfolioheavy14 } from '../../../../../constants/images'

const Portfolio3D = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Portfolio 3D</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Blender, GIMP, Sass, ThreeJS, react-spring</p>
          <p><span className='projectShow__secondColor'>Websites in total:</span> 1</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.havir.pl</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.github/havir/szaf.com</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={portfolioheavy2} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>This page</span> WAS meant to be a showcase for my blender skills, however limitations of browsers are strict and making someone download a file of 50mb just to enter a website - is never happening. So I decided to lower the size as much as possible and create a low-poly version of what I had in mind.
      </p>

      <div className='projectShow__picturesGrid'>
        
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy2} alt='' />
          <p className='projectShow__picturesGrid_p'>First frame</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy1} alt='' />
          <p className='projectShow__picturesGrid_p'>Project's foxes</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy3} alt='' />
          <p className='projectShow__picturesGrid_p'>Creating masks</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy5} alt='' />
          <p className='projectShow__picturesGrid_p'>The blooper with 1000 lamps flying</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy6} alt='' />
          <p className='projectShow__picturesGrid_p'>With the environment texture</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy4} alt='' />
          <p className='projectShow__picturesGrid_p'>Just materials</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy7} alt='' />
          <p className='projectShow__picturesGrid_p'>Different perspective 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy8} alt='' />
          <p className='projectShow__picturesGrid_p'>Different perspective 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy9} alt='' />
          <p className='projectShow__picturesGrid_p'>Making of the tables</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy10} alt='' />
          <p className='projectShow__picturesGrid_p'>Painting textures</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy11} alt='' />
          <p className='projectShow__picturesGrid_p'>All merchant tables finished</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy12} alt='' />
          <p className='projectShow__picturesGrid_p'>Basics</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy13} alt='' />
          <p className='projectShow__picturesGrid_p'>Finding the right grass texture</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfolioheavy14} alt='' />
          <p className='projectShow__picturesGrid_p'>Official look in blender</p>
        </div>
      </div>


      
      
    </>
  )
}

export default Portfolio3D