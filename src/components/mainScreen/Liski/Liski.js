
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/liski.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.94, 0.22, 7.9]} rotation={[Math.PI, -0.46, Math.PI]} scale={0.51}>
        <group position={[0.27, 0.5, -0.3]} rotation={[Math.PI, -0.83, 2.3]}>
          <group position={[0, 0.4, 0]} rotation={[0, 0, 0.05]}>
            <group position={[0, 0.45, 0]} rotation={[-0.02, 0.01, 0.5]}>
              <group position={[0, 0.33, 0]} rotation={[-0.01, -0.01, 0.62]} />
            </group>
            <group position={[0.01, 0.48, -0.13]} rotation={[-0.03, -0.04, -2.47]}>
              <group position={[0, 0.56, 0]} rotation={[-0.01, 0.01, 0.39]} />
            </group>
            <group position={[0.01, 0.48, 0.13]} rotation={[-3.13, -0.02, -0.67]}>
              <group position={[0, 0.56, 0]} rotation={[0.08, -0.02, -0.39]} />
            </group>
          </group>
          <group position={[-0.02, -0.13, 0]} rotation={[-2.06, 0.67, -2.79]}>
            <group position={[0, 0.5, 0]} rotation={[1.2, -0.03, 0.01]} />
          </group>
          <group position={[0.07, -0.06, -0.12]} rotation={[-0.04, 0, -0.14]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, -0.07, -2.35]} />
          </group>
          <group position={[0.07, -0.06, 0.12]} rotation={[-3.07, 0.03, -3]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, 0.07, 2.35]} />
          </group>
        </group>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh geometry={nodes.Object_0067.geometry} material={materials.orangeLis} />
          <mesh geometry={nodes.Object_0067_1.geometry} material={materials.whiteLis} />
          <mesh geometry={nodes.Object_0067_2.geometry} material={materials.blackLis} />
          <mesh geometry={nodes.Object_0067_3.geometry} material={materials.pinkLis} />
          <mesh geometry={nodes.Object_0067_4.geometry} material={materials.glowGreen} />
        </group>
      </group>
      <group position={[-3.82, 0.99, 1.2]} rotation={[0, 1.41, 0]} scale={0.39}>
        <group position={[0.27, 0.5, -0.3]} rotation={[Math.PI, -0.83, 2.3]}>
          <group position={[0, 0.4, 0]} rotation={[0, 0, 0.05]}>
            <group position={[0, 0.45, 0]} rotation={[-0.02, 0.01, 0.5]}>
              <group position={[0, 0.33, 0]} rotation={[-0.01, -0.01, 0.62]} />
            </group>
            <group position={[0.01, 0.48, -0.13]} rotation={[-0.03, -0.04, -2.47]}>
              <group position={[0, 0.56, 0]} rotation={[-0.01, 0.01, 0.39]} />
            </group>
            <group position={[0.01, 0.48, 0.13]} rotation={[-3.13, -0.02, -0.67]}>
              <group position={[0, 0.56, 0]} rotation={[0.08, -0.02, -0.39]} />
            </group>
          </group>
          <group position={[-0.02, -0.13, 0]} rotation={[-1.82, 0.33, -2.66]}>
            <group position={[0, 0.5, 0]} rotation={[1.25, -0.65, 0.15]} />
          </group>
          <group position={[0.07, -0.06, -0.12]} rotation={[-0.04, 0, -0.14]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, -0.07, -2.35]} />
          </group>
          <group position={[0.07, -0.06, 0.12]} rotation={[-3.07, 0.03, -3]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, 0.07, 2.35]} />
          </group>
        </group>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh geometry={nodes.Object_0069.geometry} material={materials.orangeLis} />
          <mesh geometry={nodes.Object_0069_1.geometry} material={materials.whiteLis} />
          <mesh geometry={nodes.Object_0069_2.geometry} material={materials.blackLis} />
          <mesh geometry={nodes.Object_0069_3.geometry} material={materials.pinkLis} />
          <mesh geometry={nodes.Object_0069_4.geometry} material={materials['glow red.050']} />
        </group>
      </group>
      <group position={[-6.2, 0.97, 8.55]} rotation={[Math.PI, -0.46, Math.PI]} scale={0.14}>
        <group position={[0.27, 0.5, -0.3]} rotation={[Math.PI, -0.83, 2.3]}>
          <group position={[0, 0.4, 0]} rotation={[0, 0, 0.05]}>
            <group position={[0, 0.45, 0]} rotation={[-0.02, 0.01, 0.5]}>
              <group position={[0, 0.33, 0]} rotation={[-0.01, -0.01, 0.62]} />
            </group>
            <group position={[0.01, 0.48, -0.13]} rotation={[-0.03, -0.04, -2.47]}>
              <group position={[0, 0.56, 0]} rotation={[-0.01, 0.01, 0.39]} />
            </group>
            <group position={[0.01, 0.48, 0.13]} rotation={[-3.13, -0.02, -0.67]}>
              <group position={[0, 0.56, 0]} rotation={[0.08, -0.02, -0.39]} />
            </group>
          </group>
          <group position={[-0.02, -0.13, 0]} rotation={[-2.06, 0.67, -2.79]}>
            <group position={[0, 0.5, 0]} rotation={[1.2, -0.03, 0.01]} />
          </group>
          <group position={[0.07, -0.06, -0.12]} rotation={[-0.04, 0, -0.14]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, -0.07, -2.35]} />
          </group>
          <group position={[0.07, -0.06, 0.12]} rotation={[-3.07, 0.03, -3]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, 0.07, 2.35]} />
          </group>
        </group>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh geometry={nodes.Object_0070.geometry} material={materials.orangeLis} />
          <mesh geometry={nodes.Object_0070_1.geometry} material={materials.whiteLis} />
          <mesh geometry={nodes.Object_0070_2.geometry} material={materials.blackLis} />
          <mesh geometry={nodes.Object_0070_3.geometry} material={materials.pinkLis} />
          <mesh geometry={nodes.Object_0070_4.geometry} material={materials['glow pink.002']} />
        </group>
      </group>
      <group position={[-10.57, 0.66, 7.58]} rotation={[0, 1.21, 0]} scale={0.43}>
        <group position={[0.27, 0.5, -0.3]} rotation={[Math.PI, -0.83, 2.3]}>
          <group position={[0, 0.4, 0]} rotation={[0, 0, 0.05]}>
            <group position={[0, 0.45, 0]} rotation={[-0.02, 0.01, 0.5]}>
              <group position={[0, 0.33, 0]} rotation={[-0.01, -0.01, 0.62]} />
            </group>
            <group position={[0.01, 0.48, -0.13]} rotation={[-0.03, -0.04, -2.47]}>
              <group position={[0, 0.56, 0]} rotation={[-0.01, 0.01, 0.39]} />
            </group>
            <group position={[0.01, 0.48, 0.13]} rotation={[-3.13, -0.02, -0.67]}>
              <group position={[0, 0.56, 0]} rotation={[0.08, -0.02, -0.39]} />
            </group>
          </group>
          <group position={[-0.02, -0.13, 0]} rotation={[-2, 0.42, -2.39]}>
            <group position={[0, 0.5, 0]} rotation={[1.2, -0.03, 0.01]} />
          </group>
          <group position={[0.07, -0.06, -0.12]} rotation={[-0.04, 0, -0.14]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, -0.07, -2.35]} />
          </group>
          <group position={[0.07, -0.06, 0.12]} rotation={[-3.07, 0.03, -3]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, 0.07, 2.35]} />
          </group>
        </group>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh geometry={nodes.Object_0071.geometry} material={materials.whiteLis} />
          <mesh geometry={nodes.Object_0071_1.geometry} material={materials.blackLis} />
          <mesh geometry={nodes.Object_0071_2.geometry} material={materials.pinkLis} />
          <mesh geometry={nodes.Object_0071_3.geometry} material={materials['ghost eyes.001']} />
        </group>
      </group>
      <group position={[-12.33, -0.25, 14.7]} rotation={[-Math.PI, 0.81, -Math.PI]} scale={0.75}>
        <group position={[0.27, 0.5, -0.3]} rotation={[Math.PI, -0.83, 2.3]}>
          <group position={[0, 0.4, 0]} rotation={[0, 0, 0.05]}>
            <group position={[0, 0.45, 0]} rotation={[-0.02, 0.01, 0.5]}>
              <group position={[0, 0.33, 0]} rotation={[-0.25, -0.18, 0.6]} />
            </group>
            <group position={[0.01, 0.48, -0.13]} rotation={[-0.03, -0.04, -2.47]}>
              <group position={[0, 0.56, 0]} rotation={[-0.01, 0.01, 0.39]} />
            </group>
            <group position={[0.01, 0.48, 0.13]} rotation={[-3.13, -0.02, -0.67]}>
              <group position={[0, 0.56, 0]} rotation={[0.08, -0.02, -0.39]} />
            </group>
          </group>
          <group position={[-0.02, -0.13, 0]} rotation={[-2, 0.42, -2.39]}>
            <group position={[0, 0.5, 0]} rotation={[1.2, -0.03, 0.01]} />
          </group>
          <group position={[0.07, -0.06, -0.12]} rotation={[-0.04, 0, -0.14]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, -0.07, -2.35]} />
          </group>
          <group position={[0.07, -0.06, 0.12]} rotation={[-3.07, 0.03, -3]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, 0.07, 2.35]} />
          </group>
        </group>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh geometry={nodes.Object_0072.geometry} material={materials.blackLis} />
          <mesh geometry={nodes.Object_0072_1.geometry} material={materials.pinkLis} />
          <mesh geometry={nodes.Object_0072_2.geometry} material={materials.glowGreen} />
        </group>
      </group>
      <group position={[-12.2, -0.25, 2.48]} rotation={[-Math.PI, 1.41, -Math.PI]} scale={0.75}>
        <group position={[0.27, 0.5, -0.3]} rotation={[Math.PI, -0.83, 2.3]}>
          <group position={[0, 0.4, 0]} rotation={[0, 0, 0.05]}>
            <group position={[0, 0.45, 0]} rotation={[-0.02, 0.01, 0.5]}>
              <group position={[0, 0.33, 0]} rotation={[-0.25, -0.18, 0.6]} />
            </group>
            <group position={[0.01, 0.48, -0.13]} rotation={[-0.03, -0.04, -2.47]}>
              <group position={[0, 0.56, 0]} rotation={[-0.01, 0.01, 0.39]} />
            </group>
            <group position={[0.01, 0.48, 0.13]} rotation={[-3.13, -0.02, -0.67]}>
              <group position={[0, 0.56, 0]} rotation={[0.08, -0.02, -0.39]} />
            </group>
          </group>
          <group position={[-0.02, -0.13, 0]} rotation={[-2, 0.42, -2.39]}>
            <group position={[0, 0.5, 0]} rotation={[1.2, -0.03, 0.01]} />
          </group>
          <group position={[0.07, -0.06, -0.12]} rotation={[-0.04, 0, -0.14]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, -0.07, -2.35]} />
          </group>
          <group position={[0.07, -0.06, 0.12]} rotation={[-3.07, 0.03, -3]}>
            <group position={[0, 0.49, 0]} rotation={[0.01, 0.07, 2.35]} />
          </group>
        </group>
        <group position={[11.71, 0.51, -10.79]}>
          <mesh geometry={nodes.Object_0073.geometry} material={materials.whiteLis} />
          <mesh geometry={nodes.Object_0073_1.geometry} material={materials.blackLis} />
          <mesh geometry={nodes.Object_0073_2.geometry} material={materials.pinkLis} />
          <mesh geometry={nodes.Object_0073_3.geometry} material={materials['Material.313']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/liski.glb')
