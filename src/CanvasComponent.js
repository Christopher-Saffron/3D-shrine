import React, {useState, useEffect, Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
const CanvasComponent = (props) => {
  const progress = useProgress();
  // const usProgress = useProgress();
  const [isLoading, toggleIsLoading] = useState(true)

  useEffect(() => {
    ///IF ALL IS LOADED, GIVE 1s break and hide loading
    if (progress.active === false && progress.progress === 100 ) {
      setTimeout(() => {
        toggleIsLoading(false);
      }, 500)

      
    }
    if (progress.progress === 0 ) {
      toggleIsLoading(true);
    }
  }, [progress])

  // camera={{fov: 90, position:[.5, 1.15, 4.95], rotation:[0, Math.PI / 2, 0]}}
  return (
    <div className='startScreen-canvas'>
        <Canvas camera={props.stage === 2 && {fov: 10, position:[255, 1.15, 4.95], rotation:[0, Math.PI / 2, 0]}}   className='canvas' shadows={true} invalidateframeloop={'true'} frameloop={'demand'}  shadowmap="true" >
          <Suspense fallback={ null} >
            {props.children}
          </Suspense>
        </Canvas>
        {isLoading && (
          <div className='loading-container'>
            <div className='Loader__div' >
              <svg className='Loader__div_svg' width="200" height="200" viewBox="0 0 100 100">
                  <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                  <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
                  <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                  <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
              </svg>
              <div className='Loader__div_procent'>{progress.progress.toFixed(0)}%</div>
              <div className='Loader-text'>Please wait...</div>
            </div>  
          </div>
        )}
    </div>
  )
}

export default CanvasComponent
