import React from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import './styles.scss'

const LoaderComponent = ({loadingProgress}) => {
  return (
    <>
      <Html className='noEvents-loader' position={[0, 1, 5]} center    >
        <div >
        {loadingProgress.toFixed(0)}%
        </div>
      </Html>
    </>
  )
}

export default LoaderComponent