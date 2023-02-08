import { Cloud } from '@react-three/drei'

const Clouds = () => {
    return (
            <group>
                <Cloud position={[30, 2, 5]}  segments={10} depth={3} width={5} color={'#fff'} speed={1} opacity={1} />
                <Cloud position={[20, 2, 5]}  segments={10} depth={1} width={10} color={'#fff'} speed={1} opacity={1} />
                <Cloud position={[45, 5, 10]} segments={20} width={8} speed={.4} opacity={1} />
                <Cloud position={[55, 5, 10]} segments={20} width={8} speed={.4} opacity={1} />
                <Cloud position={[66, 5, 10]} segments={80} depth={1} width={15} speed={.4} opacity={.9} />
                <Cloud position={[66, -10, 10]} segments={80} depth={1} width={15} speed={.4} opacity={.9} />
                <Cloud position={[66, -20, 10]} segments={80} depth={1} width={15} speed={.4} opacity={.9} />
                <Cloud position={[55, 5, 50]} segments={40} depth={2} width={15} speed={.4} opacity={1} />
                <Cloud position={[55, 5, -50]} segments={40} depth={2} width={15} speed={.4} opacity={1} />
                {/* <Cloud position={[35, 5, 60]} rotation={[0,-Math.PI / 3,0]} segments={30} depth={2} width={5} speed={.4} opacity={1} /> */}
            </group>
    )
}

export default Clouds