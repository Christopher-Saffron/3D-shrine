import { useSpring, animated,  } from '@react-spring/three'

function FogChange({visible}) {

    const fogValues = useSpring({
        from: {
          near: 5,
          far: 20,
        },
        to: {
          near: 200,
          far: 1300,
        },
        config: {
            duration: 8000
        }
      })
  
    // return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
    return visible && <animated.fog visible={visible} attach='fog' color={'#ffffff'} near={fogValues.near} far={fogValues.far} /> 
  }

  export default FogChange