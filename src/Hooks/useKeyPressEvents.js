import React, { useState, useEffect } from 'react'

const initialState = {
    up: false,
    down: false,
    right: false,
    left: false,
    jump: false
}
export default function useKeyPressEvent() {
  const [directions, setDirections] = useState(initialState)
  useEffect(() => {
    setEvent();
    return () => {
      setDirections(prevState => ({...prevState, initialState}))
    }
  }, [])
  function setEvent(){
  window.addEventListener('keydown', (key) => {
    if(key.key === 'w') {
        setDirections(prevState => ({
            ...prevState,
            up: true
        }))
    }else if(key.key === 's') {
        setDirections(prevState => ({
            ...prevState,
            down: true
        }))
    }else if(key.key === 'a') {
        setDirections(prevState => ({
            ...prevState,
            left: true
        }))
    }else if(key.key === 'd') {
        setDirections(prevState => ({
            ...prevState,
            right: true
        }))
    }else if(key.code === 'Space') {
        setDirections(prevState => ({
            ...prevState,
            jump: true
        }))
    }
  })
  window.addEventListener('keyup', (key) => {
    if(key.key === 'w') {
        setDirections(prevState => ({
            ...prevState,
            up: false
        }))
    }else if(key.key === 's') {
        setDirections(prevState => ({
            ...prevState,
            down: false
        }))
    }else if(key.key === 'a') {
        setDirections(prevState => ({
            ...prevState,
            left: false
        }))
    }else if(key.key === 'd') {
        setDirections(prevState => ({
            ...prevState,
            right: false
        }))
    }
    else if(key.code === 'Space') {
        setDirections(prevState => ({
            ...prevState,
            jump: false
        }))
    }
  })
}
  return directions
}
