import React from 'react'
import { AxesHelper } from 'three'
import { extend } from '@react-three/fiber'
extend({AxesHelper})

export default function Axes() {
  return (
    <axesHelper args={[10]}/>
  )
}
