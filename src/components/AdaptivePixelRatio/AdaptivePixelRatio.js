import { useThree, } from '@react-three/drei';
import {useEffect } from 'react'

function AdaptivePixelRatio() {
    const current = useThree((state) => state.performance.current)
    const setPixelRatio = useThree((state) => state.setPixelRatio)
    useEffect(() => {
      setPixelRatio(window.devicePixelRatio * current)
    }, [current])
    return null
  }

  export default AdaptivePixelRatio