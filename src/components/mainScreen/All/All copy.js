/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { DoubleSide } from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/test-all.glb')

  useEffect(() => {
    if(!materials) return;

    materials.testTexture.toneMapped = false;
    materials.testTexture.roughness = .8;
    materials.testTexture.metalness = .5;
    materials.testTexture.transparent = true;
    materials.testTexture.side = DoubleSide;

    //FLOOR
    materials['grass specular2'].toneMapped = true;
    materials['grass specular2'].metalness = .5;
    materials['grass specular2'].roughness = 1;

    //TREES
    materials['SeekPng.com_japanese-maple-png_955558.015'].roughness = 1;
    materials['SeekPng.com_japanese-maple-png_955558.015'].metalness = .3;
    materials['kindpng_509015.001'].roughness = 1;
    materials['kindpng_509015.001'].metalness = .3;
    materials['PngItem_1230215.002'].roughness =1;
    materials['PngItem_1230215.002'].metalness = .3;

    materials['PngItem_1230215.002'].toneMapped = false;
    materials['kindpng_509015.001'].toneMapped = false;
    materials['SeekPng.com_japanese-maple-png_955558.015'].toneMapped = false;

    materials['PngItem_1230215.002'].side = DoubleSide;
    materials['kindpng_509015.001'].side = DoubleSide;
    materials['SeekPng.com_japanese-maple-png_955558.015'].side = DoubleSide;

    materials.PlantMaterial.roughness = 1;
    materials.PlantMaterial.toneMapped = true;
    materials.PlantMaterial.metalness = 1;

    //CASTLE
    materials['japan_map.002'].metalness = 0;
    materials['japan_map.002'].roughness = 1;
    materials['japan_map.002'].toneMapped = false;

    //LAMPY
    materials.lampTexture.transparent = true;
    materials.lampTexture.opacity = 1;
    materials.lampTexture.roughness = .5;
    materials.lampTexture.toneMapped = true;

    //PATH
    materials.path.toneMapped = false;
    materials.path.roughness = .9;
    materials.path.metalness = .8;

    //river
    
    
    materials.riverMaterial.metalness = .3;
    materials.riverMaterial.opacity = .1;
    materials.riverMaterial.roughness = .3;
    materials.riverMaterial.transparent = true;
    

    //TORI
    materials.toriMaterial.toneMapped = true;

  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group position={[-10.62, -0.24, 16.73]}>
        <group scale={1.78}>
          <mesh geometry={nodes.BigTree.geometry} material={materials.PlantMaterial} position={[0.2, -0.02, 0.31]} rotation={[Math.PI, -1.3, Math.PI]} scale={0.8} />
        </group>
      </group>
      <group position={[0, -96.1, -84.46]}>
        <group rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials.path} position={[-0.12, -0.23, 4.95]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.path} position={[-0.12, -0.23, 4.95]} />
      <mesh geometry={nodes.A_TORI002.geometry} material={materials.toriMaterial} position={[9.64, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI005.geometry} material={materials.toriMaterial} position={[16.34, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI006.geometry} material={materials.toriMaterial} position={[23.55, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI007.geometry} material={materials.toriMaterial} position={[30.68, 2.25, 4.97]} />
      <group position={[-24.3, -0.34, 4.88]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['japan_map.002']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['rubble.001']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.path} />
      </group>
      <group position={[18.09, 0, 8.51]}>
        <mesh geometry={nodes.Cube007.geometry} castShadow receiveShadow material={materials['1BLACK']} />
        <mesh geometry={nodes.Cube007_1.geometry} castShadow receiveShadow material={materials['2RED']} />
      </group>
      <mesh geometry={nodes.grassMaterial.geometry} receiveShadow material={materials['grass specular2']} position={[-61.95, -31.99, -35.35]} rotation={[0, 0.61, 0]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.testTexture} position={[-0.12, -0.5, 4.95]} />
      <mesh geometry={nodes.water.geometry} material={materials.riverMaterial} position={[-0.12, 9.59, -10.4]} />
      <group position={[-5.94, -0.37, 9.78]}>
        <mesh geometry={nodes.Cube079.geometry} receiveShadow castShadow material={materials['Light.001']} />
        <mesh geometry={nodes.Cube079_1.geometry} receiveShadow castShadow material={materials['Lantern.001']} />
      </group>
      <mesh geometry={nodes.Cube012.geometry} material={materials.path} position={[-8.13, -0.23, 5.98]} />
      <mesh geometry={nodes.A_TORI014.geometry} material={materials.toriMaterial} position={[38.08, 2.25, 4.97]} />
      <mesh geometry={nodes.trees3.geometry} receiveShadow material={materials['SeekPng.com_japanese-maple-png_955558.015']} position={[-10.38, 5.1, -23.25]} />
      <group position={[-21.42, -0.49, 7.82]}>
        <mesh geometry={nodes.Cube015.geometry} castShadow receiveShadow material={materials['japan_map.013']} />
        <mesh geometry={nodes.Cube015_1.geometry} material={materials['japan_map.002']} />
      </group>
      <mesh geometry={nodes.A_TORI008.geometry} castShadow material={materials.toriMaterial} position={[46.8, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI015.geometry} castShadow material={materials.toriMaterial} position={[55.34, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI016.geometry} castShadow material={materials.toriMaterial} position={[64.06, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI017.geometry} castShadow material={materials.toriMaterial} position={[71.04, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI018.geometry} castShadow material={materials.toriMaterial} position={[79.76, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI019.geometry} castShadow material={materials.toriMaterial} position={[88.3, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI020.geometry} castShadow material={materials.toriMaterial} position={[97.02, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI021.geometry} castShadow material={materials.toriMaterial} position={[111.32, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI022.geometry} castShadow material={materials.toriMaterial} position={[124.48, 2.25, 4.97]} />
      <mesh geometry={nodes.A_TORI023.geometry} castShadow material={materials.toriMaterial} position={[140.79, 2.25, 4.97]} />
      <mesh geometry={nodes.trees1.geometry} receiveShadow material={materials['kindpng_509015.001']} position={[-4.38, -0.47, 11.24]} />
      <mesh geometry={nodes.trees2.geometry} receiveShadow material={materials['PngItem_1230215.002']} position={[-14.23, -0.75, 9.85]} rotation={[1.56, 0, -0.66]} />
      <mesh geometry={nodes.Chair.geometry} receiveShadow castShadow material={materials.chairMaterial} position={[-5.63, -0.57, 11.46]} rotation={[0.01, 0, 0]} />
      <mesh geometry={nodes.Chair2.geometry} receiveShadow castShadow material={materials.chairMaterial} position={[-5.63, -0.62, 14.88]} rotation={[0.01, 0, 0]} />
      <mesh geometry={nodes.wachlarz5.geometry} castShadow material={materials.testTexture} position={[-1.98, 1.11, 1.49]} rotation={[2.94, 0, 0]} />
      <mesh geometry={nodes.wachlarz4.geometry} castShadow  material={materials.testTexture} position={[-3.48, 1.11, 1.49]} rotation={[2.94, 0, 0]} />
      <mesh geometry={nodes.wachlarz1.geometry} castShadow  material={materials.testTexture} position={[-3.82, 1.11, 2.2]} rotation={[2.94, 0, 0]} />
      <mesh geometry={nodes.wachlarz2.geometry} castShadow  material={materials.testTexture} position={[-2.74, 1.11, 2.2]} rotation={[2.94, 0, 0]} />
      <mesh geometry={nodes.wachlarz3.geometry} castShadow  material={materials.testTexture} position={[-1.67, 1.11, 2.2]} rotation={[2.94, 0, 0]} />
      <mesh geometry={nodes.dangoStick.geometry} material={materials.testTexture} position={[-1.28, 0.72, 7.38]} rotation={[0, 0, -0.13]} />
      <mesh geometry={nodes.dangoReact.geometry} material={materials.testDangoTexture} position={[-1.24, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoMongoose.geometry} material={materials.testDangoTexture} position={[-1.31, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoMySql.geometry} material={materials.testDangoTexture} position={[-1.47, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoBlender.geometry} material={materials.testDangoTexture} position={[-1.55, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoSpring.geometry} material={materials.testDangoTexture} position={[-1.63, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoGsap.geometry} material={materials.testDangoTexture} position={[-1.71, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoGimp.geometry} material={materials.testDangoTexture} position={[-1.79, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoPaypal.geometry} material={materials.testDangoTexture} position={[-1.86, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <mesh geometry={nodes.dangoDavinci.geometry} material={materials.testDangoTexture} position={[-1.94, 0.72, 7.38]} rotation={[0, 0, 0.04]} scale={1.22} />
      <group position={[-1.44, 0.86, 7.41]} rotation={[0, 0, 0.04]} scale={0.93}>
        <mesh geometry={nodes.Sphere020.geometry} material={materials.testDangoTexture} />
        <mesh geometry={nodes.Sphere020_1.geometry} material={materials.testTexture} />
      </group>
      <group position={[-1.82, 0.86, 7.41]} rotation={[0, 0, 0.04]} scale={0.93}>
        <mesh geometry={nodes.Sphere020.geometry} material={materials.testDangoTexture} />
        <mesh geometry={nodes.Sphere020_1.geometry} material={materials.testTexture} />
      </group>
      <group position={[-2.26, 0.86, 7.41]} rotation={[0, 0, 0.04]} scale={0.93}>
        <mesh geometry={nodes.Sphere020.geometry} material={materials.testDangoTexture} />
        <mesh geometry={nodes.Sphere020_1.geometry} material={materials.testTexture} />
      </group>
      <group position={[-2.66, 0.86, 7.41]} rotation={[0, 0, 0.04]} scale={0.93}>
        <mesh geometry={nodes.Sphere020.geometry} material={materials.testDangoTexture} />
        <mesh geometry={nodes.Sphere020_1.geometry} material={materials.testTexture} />
      </group>
      <group position={[-3.06, 0.86, 7.41]} rotation={[0, 0, 0.04]} scale={0.93}>
        <mesh geometry={nodes.Sphere020.geometry} material={materials.testDangoTexture} />
        <mesh geometry={nodes.Sphere020_1.geometry} material={materials.testTexture} />
      </group>
      <group position={[-10.81, 1.02, 1.59]}>
        <mesh geometry={nodes.Cube083.geometry} material={materials.testTexture} />
        <mesh geometry={nodes.Cube083_1.geometry} material={materials['maskRed.002']} />
      </group>
      <group position={[-9.73, 0.79, 2.2]}>
        <mesh geometry={nodes.Cube084.geometry} castShadow material={materials['maskRed.002']} />
        <mesh geometry={nodes.Cube084_1.geometry} castShadow material={materials.testTexture} />
      </group>
      <mesh geometry={nodes.mask2002.geometry} castShadow material={materials.testTexture} position={[-10.2, 1.06, 1.63]} />
      <group position={[-11.33, 0.8, 2.16]}>
        <mesh geometry={nodes.Cube086.geometry} castShadow material={materials.testTexture} />
        <mesh geometry={nodes.Cube086_1.geometry} castShadow material={materials['maskRed.002']} />
      </group>
      <mesh geometry={nodes.origamiDuck.geometry} receiveShadow castShadow material={materials.testTexture} position={[-5.11, 1.04, 8.12]} rotation={[0, -1.03, 0]} />
      <mesh geometry={nodes.origamiBird.geometry} receiveShadow castShadow material={materials.testTexture} position={[-5.55, 1.02, 8.22]} rotation={[0, -1.32, 0]} />
      <mesh geometry={nodes.origamiCapybara.geometry} receiveShadow castShadow material={materials.testTexture} position={[-6.07, 1.05, 8.48]} rotation={[0, -0.81, 0]} />
      <mesh geometry={nodes.origamiDinosaur.geometry} receiveShadow castShadow material={materials.testTexture} position={[-5.6, 0.98, 8.38]} rotation={[0, -1.09, 0]} />
      <mesh geometry={nodes.origamiFox.geometry} receiveShadow castShadow material={materials.testTexture} position={[-5.41, 1.1, 7.9]} rotation={[0, -1.47, 0]} />
      <mesh geometry={nodes.origamiPanda.geometry} receiveShadow castShadow material={materials.testTexture} position={[-5.83, 0.97, 8.71]} rotation={[Math.PI, -1.4, Math.PI]} />
      <mesh geometry={nodes.languageCardJapanese.geometry} receiveShadow castShadow material={materials.testTexture} position={[-10.96, 0.74, 14.96]} />
      <mesh geometry={nodes.languageCardEnglish.geometry} receiveShadow castShadow material={materials.testTexture} position={[-10.96, 0.74, 14.64]} />
      <mesh geometry={nodes.languageCardPolish.geometry} receiveShadow castShadow material={materials.testTexture} position={[-10.96, 0.74, 14.33]} />
      <mesh geometry={nodes.languageCardGerman.geometry} receiveShadow castShadow material={materials.testTexture} position={[-10.53, 0.74, 14.98]} />
      <mesh geometry={nodes.languageCardSpanish.geometry} receiveShadow castShadow material={materials.testTexture} position={[-10.53, 0.74, 14.65]} />
      <mesh geometry={nodes.languageCardChinese.geometry} receiveShadow castShadow material={materials.testTexture} position={[-10.53, 0.74, 14.32]} />
      <mesh geometry={nodes.BudkaProjects.geometry} castShadow receiveShadow material={materials.testTexture} position={[-6.62, -0.15, 1.99]} scale={1.08} />
      <mesh geometry={nodes.BudkaBricscad.geometry} castShadow receiveShadow material={materials.testTexture} position={[-10.95, 0.15, 8.87]} rotation={[0, -1.55, 0]} scale={1.12} />
      <group position={[-7.87, 0.69, 16.71]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube012_1.geometry} material={materials['1BLACK']} />
        <mesh geometry={nodes.Cube012_2.geometry} material={materials['glow grey']} />
        <mesh geometry={nodes.Cube012_3.geometry} material={materials['glow blue']} />
        <mesh geometry={nodes.Cube012_4.geometry} material={materials['glow dark blue']} />
        <mesh geometry={nodes.Cube012_5.geometry} material={materials.glass} />
      </group>
      <mesh geometry={nodes.cubeGithub.geometry} material={materials.testTexture} position={[-8.26, 1.55, 16.63]} rotation={[0, Math.PI / 2, 0]} scale={1.25} />
      <mesh geometry={nodes.Budka3D.geometry} castShadow receiveShadow material={materials.testTexture} position={[-5.59, 0.21, 8.4]} rotation={[0, 0.65, 0]} />
      <mesh geometry={nodes.BudkaVideos.geometry} castShadow receiveShadow material={materials.testTexture} position={[-2.74, 0.4, 1.8]} />
      <mesh geometry={nodes.BudkaUnity.geometry} castShadow receiveShadow material={materials.testTexture} position={[-10.53, 0.89, 1.96]} scale={1.33} />
      <mesh geometry={nodes.BudkaWebdev.geometry} castShadow receiveShadow material={materials.testTexture} position={[-2.23, 0.28, 7.74]} scale={1.02} />
      <mesh geometry={nodes.Sphere001.geometry} castShadow receiveShadow  material={materials.testTexture} position={[-2.1, 1.76, 3.15]} />
      <mesh geometry={nodes.Sphere002.geometry} castShadow receiveShadow material={materials.testTexture} position={[-9.9, 1.76, 3.15]} />
      <mesh geometry={nodes.Sphere006.geometry} castShadow receiveShadow  material={materials.testTexture} position={[-3.74, 1.76, 6.67]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes.BudkaLanguages.geometry} castShadow receiveShadow material={materials.testTexture} position={[-11.21, -0.53, 13.68]} rotation={[-Math.PI, 1.55, -Math.PI]} />
      <mesh geometry={nodes.Sphere004.geometry} castShadow receiveShadow material={materials.testTexture} position={[-9.9, 1.81, 13.07]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Sphere016.geometry} castShadow receiveShadow material={materials.testTexture} position={[-12.93, 1.76, 6.78]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes.Sphere017.geometry} castShadow receiveShadow material={materials.testTexture} position={[-6, 1.83, 3.15]} />
      <mesh geometry={nodes.BricscadPaper1.geometry} material={materials.testTexture} position={[-11.09, 0.35, 9.24]} rotation={[0, -1.13, 0]} scale={1.12} />
      <mesh geometry={nodes.BricscadPaper2.geometry} material={materials.testTexture} position={[-10.52, 0.36, 8.71]} rotation={[-Math.PI, 1.3, -Math.PI]} scale={1.12} />
      <mesh geometry={nodes.BricscadPaper3.geometry} material={materials.testTexture} position={[-10.43, 0.37, 8.3]} rotation={[-Math.PI, 1.44, -Math.PI]} scale={1.12} />
      <mesh geometry={nodes.BricscadPaper4.geometry} material={materials.testTexture} position={[-11.11, 1, 7.77]} rotation={[0, -1.55, 0]} scale={1.12} />
      <mesh geometry={nodes.Lampy.geometry} castShadow material={materials.lampTexture} position={[-9.9, 1.81, 8.41]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.cubeLinkedin.geometry} material={materials.testTexture} position={[-7.73, 1.27, 16.63]} rotation={[0, Math.PI / 2, 0]} scale={1.25} />
      <mesh geometry={nodes.cubeGithub001.geometry} material={materials.testTexture} position={[-7.91, 1.55, 16.63]} rotation={[0, Math.PI / 2, 0]} scale={1.25} />
      <mesh geometry={nodes.cubeGithub002.geometry} material={materials.testTexture} position={[-7.55, 1.55, 16.63]} rotation={[0, Math.PI / 2, 0]} scale={1.25} />
      <mesh geometry={nodes.cubeLinkedin001.geometry} material={materials.testTexture} position={[-8.07, 1.27, 16.63]} rotation={[0, Math.PI / 2, 0]} scale={1.25} />
      <mesh geometry={nodes.Sphere003.geometry} castShadow receiveShadow material={materials.testTexture} position={[-9.99, 1.76, 8.41]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('/test-all.glb')