import React from 'react'
import { EffectComposer, Bloom, Noise, HueSaturation, } from '@react-three/postprocessing'
import RectangleGate from '../../components/startScreen/RectangleGate/RectangleGate';

const StartScreen = ({setStage, visible}) => {
  return (
    <>
    {visible && (
        <>
        <EffectComposer stencilBuffer={true}>
            <Bloom luminanceThreshold={.573} resolutionScale={1} mipmapBlur={true} levels={5} intensity={25} radius={.6}  opacity={1} luminanceSmoothing={.06} />
            <Noise opacity={.01} />
            <HueSaturation hue={0} saturation={.15} />
        </EffectComposer>
        <RectangleGate visible={visible} setStage={setStage} />
        </>
      )
    }
    </>
  )
}

export default StartScreen