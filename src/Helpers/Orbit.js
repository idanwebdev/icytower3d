import React, {useRef} from 'react'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { extend, useThree, useFrame } from '@react-three/fiber'
extend({OrbitControls})

export default function Orbit() {
const controls = useRef()
const {camera, gl: {domElement}} = useThree()
useFrame(state => controls.current.update());
  return (
    <orbitControls
    ref={controls}
    args={[camera, domElement]}
    />
  )
}
