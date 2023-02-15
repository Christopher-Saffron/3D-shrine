import React, {useState, useEffect} from 'react'
import { useSpring,  } from '@react-spring/three'
import { easings} from "react-spring";
import { useThree,} from '@react-three/fiber';



/////////////////////////////////////////////////////// EXPLANATION HOW IT WORKS
/////////////////////////////////////////////////////// Seems like TODOs and noble tries won't work, spawning a new perspectiveCamera messes up the entire code, even if the previous camera gets deleted, somehow many arguments are getting lost and some come through.
/////////////////////////////////////////////////////// The quick fix was to take the cameraController from the mainScreen, making it visible in both startScreen and mainScreen. And any useEffect, any code execution, anything, that happens during stage 1, ruins everything.
/////////////////////////////////////////////////////// So the quick fix is to just keep using if (stage === 2) before doing something for the mainScreen.

const CameraController = ({toggleMusic, toggleObjectsToDecluter, stage, newCameraArgs, newCameraLookAt, newCameraFov}) => {
  const { gl, camera } = useThree();
  const [initialAnimationPlayed, setInitialAnimationPlayed] = useState(false)
  const whiteBack = document.querySelector('.whiteBack')

    /////// SPRINGS FOR CAMERA FOV
    const [cameraFov, apiCameraFov] = useSpring(() => ({
      cameraFov: 10,
      config: {
           // duration: 6000
       },
       onChange: (value) => {
         camera.fov = value.value.cameraFov;
         camera.updateProjectionMatrix();
       }
     }))
    /////// SPRINGS FOR CAMERA POSITION AND ROTATION
     const [cameraProps, apiCameraProps] = useSpring(() => ({
      cameraPosX: 255,
      cameraPosY: 1.15,
      cameraPosZ: 4.95,
      cameraRotX: 0,
      cameraRotY: Math.PI / 2,
      cameraRotZ: 0,
      config: {
        mass: 5,
        friction: 120,
        tension: 120,
        // easing: easings.easeOutQuint
      },
      // onStart: () => {
      //   console.log(camera.lookAt)
      // },
      onRest: () => {
        // ////// AFTER FINISHING THE FIRST ANIMATION, MAKE SURE IT DOESN'T PLAY AGAIN + DELETE THE CLOUDS IN BEHIND + PARTICLES
        // if (!initialAnimationPlayed) {
        //   setInitialAnimationPlayed(true)
        //   toggleClouds(false)
        // }
      },
      onChange: (value) => {
        camera.position.x = value.value.cameraPosX;
        camera.position.y = value.value.cameraPosY;
        camera.position.z = value.value.cameraPosZ;
        camera.rotation.x = value.value.cameraRotX;
        camera.rotation.y = value.value.cameraRotY;
        camera.rotation.z = value.value.cameraRotZ;
        // camera.rotation.y += 0.05;
        // camera.fov = value.value.cameraFov;
        // camera.updateProjectionMatrix();
      }
      
    }))
    /////// SPRINGS FOR CAMERA POSITION AND ROTATION
    // const [cameraLookAtProps, apiCameraLookAtProps] = useSpring(() => ({
    //   cameraLookAtX: 0,
    //   cameraLookAtX: 0,
    //   cameraLookAtX: 0,
    //   cameraLookAtArray: [0,0,0],

    //   config: {
    //     mass: 5,
    //     friction: 120,
    //     tension: 120,
    //     // easing: easings.easeOutQuint
    //   },

    //   onChange: (value) => {
    //     // camera.rotation.y += 0.05;
    //     // camera.fov = value.value.cameraFov;
    //     camera.lookAt(value.value.cameraLookAtX, value.value.cameraLookAtY, value.value.cameraLookAtZ)
    //     camera.updateProjectionMatrix();
    //   }
      
    // }))


  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////// STAGE 1
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
    

  

  

  ////////////////////////////////////////////////////////////////

  // setTimeout(() => {
  //   apiCameraProps.start({
  //     cameraPosX : 10,
  //     cameraFov: newValForCamera,
  //   })
  // }, 2000)

  // setTimeout(() => {
  //   apiCameraProps.start({
  //     cameraPosX : 20,
  //     cameraFov: newValForCamera,
  //   })
  //   apiCameraProps.
  // }, 3000)

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////// STAGE 2
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (stage === 2) {
      ////// rotation is broken, even though the DEFAULT camera and the CANVAS ELEMENT's CAMERA also have identical rotation, it's broken, so we set it up again
    }
    
  }, [stage])

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////// FOV
///////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    //// THIS WILL BE THE FIRST ANIMATION THAT ZOOMS INTO THE VILLAGE //// INITIAL ANIMATION TURNS TRUE ON FINISHING THE FIRST ZOOM ANIMATION
    if (stage === 2 && initialAnimationPlayed === false) {
      apiCameraFov.start({
        cameraFov: newCameraFov,
        config: {
          duration: 6000,
              easing: easings.easeInOutQuint
        }
      })
      ////FOR ANY FUTURE FOV CHANGES
    } else if (stage === 2 && initialAnimationPlayed === true) {
      apiCameraFov.start({
        cameraFov: newCameraFov,
        config: {
          duration: 1500,
              easing: easings.easeInOutQuint
        }
      })
    }
    
  }, [newCameraFov])

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
        // cameraFov: newCameraFov,
        config: {
          duration: 6000,
          easing: easings.easeInOutQuint
        },
        onStart: () => {

          ////IF THE INITIAL ANIMATION HAS NOT YET BEEN PLAYED, DO THIS:
          if (!initialAnimationPlayed) {
            whiteBack.remove();
            console.log('starting ANIMATIOON')
            //// SHOW BACK NAVBAR
            document.querySelector('.startScreen__navbar').classList.remove('startScreen__navbar_hide')
          }

          /// START PLAYING MUSIC
          toggleMusic(true)

          ///// REMOVE WHITE BACKGROUND TO COVER UP THE LOADING STUTTER
          
        },
        onRest: () => {

          ////// AFTER FINISHING THE FIRST ANIMATION, MAKE SURE IT DOESN'T PLAY AGAIN + DELETE THE CLOUDS IN BEHIND + PARTICLES
        if (!initialAnimationPlayed) {
          setInitialAnimationPlayed(true)
          toggleObjectsToDecluter(false)
        }

          ///// START PLAYING MUSIC
          // toggleMusic(true)

          console.log('resting')
          ///// SHOW MENU ON FINISH
          document.querySelector('.interface__right_holder').style.display = 'block';
          document.querySelector('.interface__options').style.display = 'block';
          
        },
        onChange:() => {
          console.log('frame')
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
        config: {
          duration: 1500,
          easing: easings.easeInOutQuint
        },
        onChange:() => {
          console.log('frame')
        }
      })
    }
   
  }, [newCameraArgs])

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////// CAMERA LOOK AT
///////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {

  // }, [newCameraLookAt])

  /////////////// ====================== USEFRAME + STATE APPROACH
  // const vec = new THREE.Vector3();
  // useFrame((state) => {
  //  if (currentlyAnimating)  {
  //   state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, newCameraFov, 0.2)
  //   state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
  //   state.camera.lookAt(-1, 0, 0)
  //   state.camera.updateProjectionMatrix()
  //  } return null;
  // })

  // useEffect(() => {
  //   toggleCurrentlyAnimating(true)

  //   ///TURN OFF ANIMATING AFTER 2S
  //   // setTimeout(() => {
  //   //   toggleCurrentlyAnimating(false);
  //   // }, 2000)
  // }, [newCameraArgs, newCameraFov])


  return ( 
    <>
    {/* {stage === 1 ? <>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}    />
      <OrbitControls />
    </> : stage === 2 ? 
      <perspectiveCamera makeDefault position={[150, 1.15, 4.95]} rotation={[0, Math.PI / 2, 0]}  args={[10,0,10]}   />
    : ""
    } */}
    <perspectiveCamera makeDefault position={[150, 1.15, 4.95]} rotation={[0, Math.PI / 2, 0]}  args={[10,0,10]}   />
    </>
  )
}

export default CameraController