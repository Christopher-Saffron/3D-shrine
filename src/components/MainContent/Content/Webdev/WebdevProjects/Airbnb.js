import React from 'react'

const Airbnb = () => {
  return (
    <>
    <div className='projectShow__flexBox'>
      <div className='projectShow__infoPanel'>
        <p><span className='projectShow__secondColor'>Project Title:</span> Nippon Air</p>
        <p><span className='projectShow__secondColor'>Tools used:</span> React, Blender, Mongoose, Mongodb Atlas, Paypal, Stripe, Maps, Three.js, Next-js, Tailwind, React-Leaflet,</p>
        <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://nipponair.vercel.app/'>https://nipponair.vercel.app/</a></p>
        <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Christopher-Saffron/NipponAir-ONLINE-MARKETPLACE'>https://github.com/Christopher-Saffron/NipponAir-ONLINE-MARKETPLACE</a></p>
      </div>
      <div className='projectShow__flexBox_img'>
        <img src={'airbnb.jpg'} alt='' />
      </div>
    </div>
    <p className='projectShow__paragraph'>
      <span className='projectShow__secondColor'>Using Nippon Air</span> as a mean to practice with payments as well as maps, databases and some simple 3d objects.
    </p>
  </>
  )
}

export default Airbnb
