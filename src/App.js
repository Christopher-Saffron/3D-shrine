import React, {useEffect, useState} from 'react'
import './styles.scss'

import {Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls, Environment, } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, HueSaturation, Pixelation, ChromaticAberration, Scanline, GodRays, SSAO, ToneMapping, BrightnessContrast, SMAA } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, BlendFunction   } from 'postprocessing'

import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { Selection  } from '@react-three/postprocessing'

// import LoadingComponent from '../LoadingComponent/LoadingComponent';



//////// STARTING SETUP
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import BackgroundVidLoop from './assets/video/BackgroundVidLoop.mp4'
import RectangleGate from './components/startScreen/RectangleGate/RectangleGate';
import RectangleGateNav from './components/startScreen/RectangleGateNav/RectangleGateNav';
import RectangleGateFooter from './components/startScreen/RectangleGateFooter/RectangleGateFooter'
import { playMusic, stopMusic } from './components/AudioPlayer/AudioPlayer'

////////// DEFAULT SETUP
import CanvasComponent from './CanvasComponent'
import CameraController from './components/CameraController/CameraController'
import FPSController from './components/FPSController/FPSController'

///////// MAIN SETUP
import MainScreen from './components/mainScreen/MainScreen'
import UIMainScreen from './components/mainScreen/UIMainScreen/UIMainScreen'
import UIMainScreenOptions from './components/mainScreen/UIMainScreenOptions/UIMainScreenOptions'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import MainContent from './components/MainContent/MainContent'
extend({ EffectComposer, RenderPass, UnrealBloomPass });

// const vidSrc = BackgroundVidLoop;

const App = () => {


  // useEffect(() => {

  //   let myPromise = new Promise((resolve,reject) => {
  //     const vid = document.createElement('video');
  //     vid.src = vidSrc;
  //     // vid.oncanplay = () => {console.log('can play')}
  //     // vid.onloadstart = () => {console.log('started loading')}
  //     // vid.ondurationchange = (e) => {console.log(e)}

  //     // vid.classList.add('mainVideo')
  //     // vid.mute = true;
  //     // vid.loop = true;
  //     vid.setAttribute('muted', true);
  //     // vid.play();
  //     // vid.pause();
  //     // vid.controls = true;
      
  //     // vid.onload = () => {console.log('loaded')}
  //     // vid.onloadedmetadata = () => {console.log('metadata')}
  //     // vid.onloadeddata = () => {console.log('loaded data')}
      
  //     vid.load();   //// IMPORTANT STEP, WITHOUT IT THE WHOLE ELEMENT JUST FIRES OFF ALL EVENTS AT ONCE THINKING IT'S DONE A GREAT JOB - which is, in fact, a profound lie
  //     // vid.onprogress = (e) => {console.log(e)}
  //     vid.oncanplaythrough = () => {console.log('can play through'); resolve(vid); confirmLoading()}
  //     console.log(vid.readyState)
      
  //   })

  //   myPromise.then((val) => {
  //     console.log(val.src)
  //   })


  //   // const loadImage = (image) => {
  //   //   return new Promise((resolve, reject) => {
  //   //     const loadImg = new Image();
  //   //     loadImg.src = image.url;
  //   //     loadImg.onload = () => {
  //   //       confirmLoading();
  //   //       resolve(image.url)
  //   //     }
  //   //     loadImg.onerror = err => reject(err);
  //   //   })
  //   // }

  //   // Promise.all(IMAGES.map(image => loadImage(image)))
  //   //   .catch(err => console.log('Failed to load something', err))
  // },[])




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO: THERE IS SOME useGLTB maybe use it for loading
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TODO: ACTUALLY ITS OK TO MAKE IT ON ANOTHER WEBSITE AND JUST LINK IT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jUST MAKE A LINE THAT SAYS CHECK OUT MY PORTFOLIO IN 3D OR SOMETHING
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ITS JUST GONNA LOOK LIKE YOU'RE CONSTANTLY WORKING ON IT!!

    //// LOADING STATUS
    const [loading, toggleLoading] = useState(true);
    /// loading number, NOT SCREEN STAGE
    const [loadingState, increaseLoadingState] = useState(0);

    

        /// CHECK IF LOADING COMPLETE - function used everytime the main images load
    const confirmLoading = () => {

      increaseLoadingState(prevState => { return prevState + 1})
    }
    //// CHECK IF LOADING COMPLETE
    // useEffect(() => {
    //   if (loadingState === 1) {
    //     //IF BOTH ELEMENTS LOADED - WAIT 1s and play sound effect
    //     setTimeout( () => {toggleLoading(false)}, 1000 )
    //   }
    // }, [loadingState])

    

    //////////  
    //// CAMERA ANIMATIONS ----
    //////////
    const [newCameraArgs, setnewCameraArgsAppend] = useState([155, 1.15, 4.95, 0, Math.PI / 2, 0])
    const [isAnimating, toggleIsAnimating] = useState(true)

    const setnewCameraArgs = (newCoords) => {

      //// SMALL TRICK TO MAKE SURE THE FIRST ANIMATION GOES THROUGH, WITHOUT IT, THE CYCLE IS STUCK ON CONSTANT ANIMATION
      if (objectsToDecluter) {
        setnewCameraArgsAppend(newCoords);
        return

        // /CAMERA IS ALREADY MOVING, DENY REQUEST
      } else if (isAnimating) {return}
      ///CAMERA IS NOT MOVING, CAN BE CHANGED
      toggleIsAnimating(true);
      setnewCameraArgsAppend(newCoords);

    }


    const [newCameraFov, setnewCameraFov] = useState(30)
    const [allowParticles, toggleAllowParticles] = useState(false);

    const [stage, setStage] = useState(1);

    useEffect(() => {

      ///// THIS STARTS THE MAIN ZOOM ANIMATION, we could transport this fragment to the CameraController, but it could complicate it even more.
      if (stage === 2 ) {
        // setnewCameraFov(80)
        setnewCameraArgs([0.5, 1.15, 4.95, 0, Math.PI / 2, 0, 80])
      }
    }, [stage])
    //////////
    ////////// BASED ON THIS VARIABLE, SOME OBJECTS ARE GOING TO BE DELETED ONCE THE FIRST ZOOM ANIMATION IS COMPLETED
    //////////
    const [objectsToDecluter, toggleObjectsToDecluter] = useState(true)

    //////////
    ////////// MUSIC
    //////////
    const [music, toggleMusic] = useState(false)

    useEffect(() => {
      if (music) {
        playMusic();
      } else {
        stopMusic();
      }
    }, [music])


    //////////
    ///////// PRESETS
    //////////
    const [preset, setPreset] = useState(1)

    //////////
    /////////// SHOW WELCOME DIV
    //////////
    const [welcome, toggleWelcome] = useState(false);

    // const [preset, setPreset] = useState({
    //   bloom: 0.31,
    //   vignetteOffset: .3,
    //   hue: 0,
    //   hueSaturation: .1,
    //   brightness: .05,
    //   contrast: .2
    // })

    //////////
    /////////////////////////// MAIN CONTENT BOX
    //////////
    const [mainContent, setMainContent] = useState(undefined)

    useEffect(() => {
      console.log(mainContent)
    }, [mainContent])

  return (
    <>
      {/* {!loading && (
        <div className='HeavyPage' style={loading ? {display: 'none'} : {}}>
          <VideoPlayer vid={vidSrc} />
        </div>
      )} */}
      {/* <Selection> */}
        <div className='App'>
        {stage === 1 && (
          <>
            <VideoPlayer vid={BackgroundVidLoop} />
            <RectangleGateFooter />
          </>
        )}
        { stage === 2 && (
          <>
            <UIMainScreen setMainContent={setMainContent} setnewCameraArgs={setnewCameraArgs}/>
            <UIMainScreenOptions toggleMusic={toggleMusic} setPreset={setPreset} toggleAllowParticles={toggleAllowParticles} setnewCameraArgs={setnewCameraArgs}/>
          </>
        )}

        {welcome && (
          <WelcomeScreen toggleWelcome={toggleWelcome} />
        )}

        <RectangleGateNav />
        
        
        <div className="shadow-title parallax-top-shadow">Havir</div>
        {/* <Canvas camera={{fov: 90, position:[.5, 1.15, 4.95], rotation:[0, Math.PI / 2, 0]}} shadows={true} invalidateframeloop={true} frameloop={'demand'}  shadowMap ></Canvas> */}
        {/* <Canvas className='canvas' camera={{fov: 90, position:[.5, 0, 4.95], rotation:[0, Math.PI / 2, 0]}} shadows={true} invalidateframeloop={'true'} frameloop={'demand'}  shadowmap="true" >
        </Canvas> */}
        <CanvasComponent allowParticles={allowParticles} isAnimating={isAnimating} stage={stage}>
        {isAnimating || allowParticles  ? <FPSController fps={allowParticles ? 50 : 25} /> : '' }
          
          <CameraController setMainContent={setMainContent} toggleIsAnimating={toggleIsAnimating} toggleWelcome={toggleWelcome} toggleMusic={toggleMusic} toggleObjectsToDecluter={toggleObjectsToDecluter} stage={stage} newCameraArgs={newCameraArgs}/>

          <OrbitControls />
          {/* <Bloom  luminanceThreshold={.1} radius={5} levels={14}  resolutionScale={1} intensity={2} luminanceSmoothing={3}/> */}
          {stage === 1 ? 
            <>
              <EffectComposer stencilBuffer={true}>
                <Bloom luminanceThreshold={.573} resolutionScale={1} mipmapBlur={true} levels={5} intensity={25} radius={.6}  opacity={1} luminanceSmoothing={.06} />
                
                <Noise opacity={.05} />
                <HueSaturation hue={0} saturation={.15} />
              </EffectComposer>
              <RectangleGate setStage={setStage} />
            </>
          
          : stage === 2 ?
            <MainScreen allowParticles={allowParticles} preset={preset} objectsToDecluter={objectsToDecluter} setnewCameraArgs={setnewCameraArgs} />
          : ''
          }
          
        </CanvasComponent>
        <div className='whiteBack' />
        {/* <LoadingComponent loading={loading} procent={loadingState * 7.6923} /> */}
        {stage === 2 && mainContent !== undefined  && (
        
          <MainContent mainContent={mainContent} />
        
        )}
      </div>
      {/* </Selection> */}
    </>
  )
}

export default App