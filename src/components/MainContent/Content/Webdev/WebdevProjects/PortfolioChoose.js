import React from 'react'
import { portfoliochoose2 } from '../../../../../constants/images'

const PortfolioChoose = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Portfolio START</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React</p>
          <p><span className='projectShow__secondColor'>Websites in total:</span> 1</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.havir.pl</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.github/havir/szaf.com</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={portfoliochoose2} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>This page</span> utilizes a light and fast particle system. It was meant to be a simple eye catcher for the viewer. Before entering the real website.
      </p>



      
      
    </>
  )
}

export default PortfolioChoose