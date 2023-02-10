import React, {useState, useEffect} from 'react'

import Liski from './Liski/Liski'
import AllObjectsFinal from './All/AllObjectsFinal'
import Object from './All/Object3'

import Lights from './Lights/Lights'
import FogChange from './Fog/Fog'
import Clouds from './Clouds/Clouds'
import Lampions from './Lampions/Lampionsflying'
import { Particles } from './Particles/Particles'
import { ParticlesInside } from './Particles/ParticlesInside'



import {Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Bloom, Vignette, HueSaturation, BrightnessContrast, } from '@react-three/postprocessing'
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import {Environment } from '@react-three/drei'
extend({OutlinePass, EffectComposer, RenderPass, UnrealBloomPass });
const MainScreen = ({visible, preset, allowParticles, objectsToDecluter, setnewCameraArgs}) => {
  // useFrame((state, delta, xrFrame) => {
  //   console.log(state)
  // })

 
  
  return (
    <>
    {(visible && objectsToDecluter) ? <FogChange visible={visible} /> : ''}
      
    
    <group visible={visible}>
        
        {/* <Object /> */}
        <AllObjectsFinal setnewCameraArgs={setnewCameraArgs} objectsToDecluter={objectsToDecluter} />
        <Lights />
        
        


        {/* ////////////// THIS WILL BE DELETED AFTER FIRST ANIMATION FINISHES */}
        {objectsToDecluter && 
          <>
            <Clouds />
            <Particles />
          </>
        }

        {/* /////////////// THIS WILL BE ALLOWED AFTER USER ALLOWS RISK + FPS BOOST */}
        {allowParticles && 
          <>
            <ParticlesInside />
            {/* <Lampions /> */}
          </>
        }


        {/* <CameraController newCameraArgs={newCameraArgs} newCameraLookAt={newCameraLookAt} newCameraFov={newCameraFov} /> */}
        {/* <OrbitControls /> */}
        {/* <Environment background={"only"} files={process.env.PUBLIC_URL + "/bg.hdr"} /> */}
        {/* <Environment background={false} files={process.env.PUBLIC_URL + "/envmap.hdr"} /> */}

        {visible && (
          <>
            <Environment  background={true} files={process.env.PUBLIC_URL + "/moonless_golf_1k.hdr"} />
            {/* <FogChange /> */}

            <EffectComposer multisampling={3} stencilBuffer={true}> 
            
             
              
              {preset === 1 ?
                <>
                  <Bloom  luminanceThreshold={0.31} radius={0}  resolutionScale={1} />
                  <Vignette eskil={false} offset={.3} darkness={.7} />
                  <HueSaturation hue={0} saturation={.1} />
                  <BrightnessContrast brightness={0.05} contrast={0.2} />
                  <DepthOfField focusDistance={0.004} focalLength={0.01} bokehScale={3.5} /> 
                </>
              : preset === 2 ? 
              <>
                  <Bloom  luminanceThreshold={0.31} radius={0}  resolutionScale={1} />
                  <Vignette eskil={false} offset={.5} darkness={.7} />
                  <HueSaturation hue={56} saturation={0} />
                  <BrightnessContrast brightness={0.01} contrast={0.1} />
                  <DepthOfField focusDistance={0.004} focalLength={0.01} bokehScale={3.5} /> 
              </> 
              : preset === 3 ? 
              <>
                  <Bloom  luminanceThreshold={0.55} radius={0}  resolutionScale={1} />
                  <Vignette eskil={false} offset={.5} darkness={.7} />
                  <HueSaturation hue={6} saturation={0} />
                  <BrightnessContrast brightness={0.03} contrast={0.3} />
                  <DepthOfField focusDistance={0.004} focalLength={0.01} bokehScale={3.5} /> 
              </>
              : ''}

          </EffectComposer>
        </>
          )}
        

        
    </group>
    </>
  )
}

export default MainScreen


 {/* /////////// THEY ARE ALSO OK */}
              {/* <Bloom mipmapBlur luminanceThreshold={0} radius={0.7} />   */}
              {/* <Bloom  luminanceThreshold={.2} radius={0} />  */}
              {/* <Bloom luminanceThreshold={.63} resolutionScale={1} mipmapBlur={true} levels={10} intensity={10} radius={.8}  opacity={1} luminanceSmoothing={.06} /> */}



              {/* /////////// SURPRISINGLY NICE COLORS */}
              {/* <Bloom
                      intensity={5.0} // The bloom intensity.
                      
                      mipmapBlur={true}
                      levels={5}
                      radius={1}
                      luminanceThreshold={0.4} // luminance threshold. Raise this value to mask out darker elements in the scene.
                      luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                  /> */}

                  {/* /////// TO JEST VERY INTERESTING COMBO NA JAKIEŚ BEFORE ENTERING THE VALLEY BLOOM */}
              {/* <Bloom  luminanceThreshold={0.1} radius={1}  resolutionScale={1}/> */}
