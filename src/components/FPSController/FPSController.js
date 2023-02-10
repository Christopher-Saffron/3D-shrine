import{useEffect, useLayoutEffect} from 'react'
import { useFrame, useThree} from '@react-three/fiber'

function FPSController({ fps }) {
    const set = useThree((state) => state.set);
    const get = useThree((state) => state.get);
    const advance = useThree((state) => state.advance);
    const frameloop = useThree((state) => state.frameloop);
  
    useLayoutEffect(() => {
        const initFrameloop = get().frameloop;
  
        return () => {
            set({ frameloop: initFrameloop });
        };
    }, []);
  
    useFrame((state) => {
        if (state.get().blocked) return;
        state.set({ blocked: true });
  
        setTimeout(() => {
            state.set({ blocked: false });
  
            state.advance();
        }, Math.max(0, 1000 / fps - state.clock.getDelta()));
    });
  
    useEffect(() => {
        if (frameloop !== 'never') {
            set({ frameloop: 'never' });
            advance();
        }
    }, [frameloop]);
  
    return null;
  }


// function FPSController({fps}) {
//     const {invalidate, clock, advance} = useThree();
//     useEffect(() => {
//         let delta = 0;
//         const interval = 1/fps;
//         const update = () => {
//             requestAnimationFrame(update);
//             delta += clock.getDelta();

//             if (delta > interval) {
//                 invalidate();
//                 delta = delta % interval;
//             }
//         }

//         update();
//     }, [])

//     return null;
// }


  export default FPSController;