import React, {useEffect, useState} from 'react'
import './styles.scss'

import {Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls, Environment, } from '@react-three/drei'
import { EffectComposer} from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, BlendFunction   } from 'postprocessing'

import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

// import LoadingComponent from '../LoadingComponent/LoadingComponent';



//////// STARTING SETUP
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import BackgroundVidLoop from './assets/video/BackgroundVidLoop.mp4'
import StartScreen from './components/startScreen/StartScreen'
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

const App = () => {


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO: THERE IS SOME useGLTB maybe use it for loading
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TODO: ACTUALLY ITS OK TO MAKE IT ON ANOTHER WEBSITE AND JUST LINK IT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jUST MAKE A LINE THAT SAYS CHECK OUT MY PORTFOLIO IN 3D OR SOMETHING
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ITS JUST GONNA LOOK LIKE YOU'RE CONSTANTLY WORKING ON IT!!

    

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

    //////////
    ////////// NO MOVEMENT STUCK ------------ FIX
    //////////
    // useEffect(() => {
    //   ////// sometimes, when the app uses the 'isAnimating' var, to stop the user from overclicking the navigation, it forgets(?) to free the value as it finishes
    //   ///// SO WE CREATE A QUICK FIX FOR THAT BY SIMPLY CHANGING IT MANUALLY
    //   if (isAnimating) {
    //     setTimeout(() => {
    //       if (isAnimating === true) {
    //         toggleIsAnimating(false)
    //       }
    //     }, 3000)
    //   }
    // }, [isAnimating])

    //////////
    ////////// allows more fps and particles
    //////////
    const [allowParticles, toggleAllowParticles] = useState(false);

    //////////
    ////////// stage between start and main screen
    //////////
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

    //////////
    /////////////////////////// MAIN CONTENT BOX
    //////////
    const [mainContent, setMainContent] = useState(undefined)

  return (
    <>
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
        
        <CanvasComponent allowParticles={allowParticles} isAnimating={isAnimating} stage={stage}>
        {isAnimating || allowParticles  ? <FPSController fps={allowParticles ? 50 : 25} /> : '' }
          
          <CameraController setMainContent={setMainContent} toggleIsAnimating={toggleIsAnimating} toggleWelcome={toggleWelcome} toggleMusic={toggleMusic} toggleObjectsToDecluter={toggleObjectsToDecluter} stage={stage} newCameraArgs={newCameraArgs}/>
            <StartScreen visible={stage===1} setStage={setStage}  />
            <MainScreen visible={stage===2} allowParticles={allowParticles} preset={preset} objectsToDecluter={objectsToDecluter} setnewCameraArgs={setnewCameraArgs} />
          
        </CanvasComponent>
        <div className='whiteBack' />
        {stage === 2 && mainContent !== undefined  && (
          <MainContent mainContent={mainContent} />
        )}
      </div>
    </>
  )
}

export default App