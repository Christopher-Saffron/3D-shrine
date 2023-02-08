import React, {useState, useEffect} from 'react'
import {PerspectiveCamera, OrbitControls} from '@react-three/drei'
import { useSpring, animated,  } from '@react-spring/three'
import { easings} from "react-spring";
import { useThree,useFrame } from '@react-three/fiber';
import * as THREE from 'three'

function lerp(x, y, a) {
  const r = (1 - a) * x + a * y
  return Math.abs(x - y) < 0.001 ? y : r
}



/////////////////////////////////////////////////////// EXPLANATION HOW IT WORKS
/////////////////////////////////////////////////////// Seems like TODOs and noble tries won't work, spawning a new perspectiveCamera messes up the entire code, even if the previous camera gets deleted, somehow many arguments are getting lost and some come through.
/////////////////////////////////////////////////////// The quick fix was to take the cameraController from the mainScreen, making it visible in both startScreen and mainScreen. And any useEffect, any code execution, anything, that happens during stage 1, ruins everything.
/////////////////////////////////////////////////////// So the quick fix is to just keep using if (stage === 2) before doing something for the mainScreen.

const CameraController = ({setMainContent, toggleIsAnimating, toggleWelcome, toggleMusic, toggleObjectsToDecluter, stage, newCameraArgs}) => {
  const { gl, camera } = useThree();
  const [initialAnimationPlayed, setInitialAnimationPlayed] = useState(false)
  const whiteBack = document.querySelector('.whiteBack')

    /////// SPRINGS FOR CAMERA POSITION AND ROTATION
     const [cameraProps, apiCameraProps] = useSpring(() => ({
      cameraPosX: 255,
      cameraPosY: 1.15,
      cameraPosZ: 4.95,
      cameraRotX: 0,
      cameraRotY: Math.PI / 2,
      cameraRotZ: 0,
      cameraFov: 10,
      config: {
        mass: 5,
        friction: 120,
        tension: 120,
      },
      onRest: () => {
        // console.log(gl);
        // console.log(camera)
      },
      onChange: (value) => {
        // camera.position.x = value.value.cameraPosX;
        // camera.position.y = value.value.cameraPosY;
        // camera.position.z = value.value.cameraPosZ;
        // camera.rotation.x = value.value.cameraRotX;
        // camera.rotation.y = value.value.cameraRotY;
        // camera.rotation.z = value.value.cameraRotZ;
        // camera.position = new THREE.Vector3(value.value.cameraPosX, value.value.cameraPosY, value.value.cameraPosZ)
        // camera.position = new THREE.Vector3(0,0,0);
        camera.position.set(value.value.cameraPosX, value.value.cameraPosY, value.value.cameraPosZ);
        camera.rotation.set(value.value.cameraRotX, value.value.cameraRotY, value.value.cameraRotZ)
        camera.fov = value.value.cameraFov;
        camera.updateProjectionMatrix();
      }
      
    }))

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////// CAMERA POSITION
///////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    //// THIS WILL BE THE FIRST ANIMATION THAT ZOOMS INTO THE VILLAGE //// INITIAL ANIMATION TURNS TRUE ON FINISHING THE FIRST ZOOM ANIMATION
    if (stage === 2 && initialAnimationPlayed === false) {
      apiCameraProps.start({
        cameraPosX : newCameraArgs[0],
        cameraPosY : newCameraArgs[1],
        cameraPosZ : newCameraArgs[2],
        cameraRotX : newCameraArgs[3],
        cameraRotY : newCameraArgs[4],
        cameraRotZ : newCameraArgs[5],
        cameraFov: newCameraArgs[6],
        config: {
          duration: 6000,
          easing: easings.easeInOutQuint
        },
        onStart: () => {

          /////WITH THIS YOU CAN'T CLICK ANYTHING THAT WOULD START THE CAMERA MOVEMENT, UNTIL THIS ANIMATION FINISHES
          toggleIsAnimating(true);

          ////IF THE INITIAL ANIMATION HAS NOT YET BEEN PLAYED, DO THIS:
          if (!initialAnimationPlayed) {
            whiteBack.remove();
            //// SHOW BACK NAVBAR
            document.querySelector('.startScreen__navbar').classList.remove('startScreen__navbar_hide')
          }

          /// START PLAYING MUSIC
          toggleMusic(true)

          ///// REMOVE WHITE BACKGROUND TO COVER UP THE LOADING STUTTER
          
        },
        onRest: () => {

          ////// ANIMATION FINISHED, CAN PLAY A NEW ONE
          toggleIsAnimating(false);
          ////// AFTER FINISHING THE FIRST ANIMATION, MAKE SURE IT DOESN'T PLAY AGAIN + DELETE THE CLOUDS IN BEHIND + PARTICLES
        if (!initialAnimationPlayed) {
          setInitialAnimationPlayed(true)
          toggleObjectsToDecluter(false)
        }

          ///// START PLAYING MUSIC
          // toggleMusic(true)

          ///// SHOW MENU ON FINISH
          document.querySelector('.interface__right_holder').style.display = 'block';
          document.querySelector('.interface__options').style.display = 'block';

          /////ALLOW THE MAINCONTENT BOX TO APPEAR
          setMainContent(null);

          ////SHOW WELCOME DIV AFTER 1S

          setTimeout(() => {
            toggleWelcome(true)
          }, 1000)
          
        },
        onChange:() => {
        }
      })
      /////// EVERY NEXT CAMERA CHANGE WILL HAPPEN HERE
    } else if (stage === 2 && initialAnimationPlayed === true) {
      apiCameraProps.start({
        cameraPosX : newCameraArgs[0],
        cameraPosY : newCameraArgs[1],
        cameraPosZ : newCameraArgs[2],
        cameraRotX : newCameraArgs[3],
        cameraRotY : newCameraArgs[4],
        cameraRotZ : newCameraArgs[5],
        cameraFov: newCameraArgs[6],
        config: {
          duration: 1500,
          easing: easings.easeInOutQuint
        },
        onStart: () => {
          ////toggle animation so no other animation can be played
          toggleIsAnimating(true);
          ////change the current showing content
          setMainContent(newCameraArgs[7])
        },
        onRest: () => {
          toggleIsAnimating(false);
        },
        onChange:() => {
        }
      })
    }
   
  }, [newCameraArgs])



  return ( 
    <perspectiveCamera makeDefault position={[150, 1.15, 4.95]} rotation={[0, Math.PI / 2, 0]}   />
  )
}

export default CameraController