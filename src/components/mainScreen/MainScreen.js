import React from 'react'

import AllObjectsFinal from './All/AllObjectsFinal'

import Lights from './Lights/Lights'
import FogChange from './Fog/Fog'
import Clouds from './Clouds/Clouds'
import { Particles } from './Particles/Particles'
import { ParticlesInside } from './Particles/ParticlesInside'



import {extend } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Bloom, Vignette, HueSaturation, BrightnessContrast, } from '@react-three/postprocessing'
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import {Environment } from '@react-three/drei'
extend({OutlinePass, EffectComposer, RenderPass, UnrealBloomPass });
const MainScreen = ({visible, preset, allowParticles, objectsToDecluter, setnewCameraArgs}) => {

 
  
  return (
    <>
    {(visible && objectsToDecluter) ? <FogChange visible={visible} /> : ''}
      
    
    <group visible={visible}>
        
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
          </>
        }

        {visible && (
          <>
            <Environment  background={true} files={process.env.PUBLIC_URL + "/moonless_golf_1k.hdr"} />

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
