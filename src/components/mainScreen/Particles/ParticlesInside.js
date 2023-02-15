import { Sparkles } from "@react-three/drei";

export function ParticlesInside() {
    return <>
  
        <object3D position={[-7, 1, 9]}>
          <Sparkles count={100} scale={[11, 3, 32]} color={"#ffffff"} size={3} speed={.5} noise={1}/>
        </object3D>
        </>
}