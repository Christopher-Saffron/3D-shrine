import { Sparkles } from "@react-three/drei";

export function Particles() {
    return <>
  
        <object3D position={[30, 1, 5]}>
          <Sparkles count={100} scale={[50, 4, 15]} color={"#ffaacc"} size={5} speed={0.2} noise={.1}/>
        </object3D>
        </>
}