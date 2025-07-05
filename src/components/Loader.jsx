import { Html } from '@react-three/drei'
import React from 'react'
import { useProgress } from '@react-three/drei';

const Loader = () => {
    const {progress}=useProgress();
    return <Html center 
    className='font-normal text-xl text-center'
    >{progress}% Loaded</Html>
}

export default Loader
