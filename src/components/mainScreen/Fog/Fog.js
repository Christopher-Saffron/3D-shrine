import { useSpring, animated,  } from '@react-spring/three'

function FogChange() {
    // const [myFog, setMyFog] = useState(['#000000', 10, 100])

    //   const positionChange = useSpring({
    
    //     from: {  y: 1, z: 30, },
    //     y: 400,
    //     z: 1000,
        
    //   //   delay: 200,
    //     config: {duration: 8000},
    //     // onChange: (what) => {setMyFog(['#f564f0', what.value.y, what.value.z]);},
    //     onChange: (what) => {setMyFog(['#ffffff', what.value.y, what.value.z]);},
    //   })

    const fogValues = useSpring({
        from: {
          near: 5,
          far: 20,
        },
        to: {
          near: 1,
          far: 1000,
        },
        config: {
            duration: 3000
        }
      })
  
    // return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
    return <animated.fog attach='fog' color={'#ffffff'} near={fogValues.near} far={fogValues.far} />
  }

  export default FogChange