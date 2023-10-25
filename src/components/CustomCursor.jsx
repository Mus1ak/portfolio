import React, { useRef } from 'react'
import { styled } from 'styled-components'

const CustomCursor = () => {
    const cursorRef = useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (event)=> {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    },[])
  return (
    <Cursor ref={cursorRef}>
        
    </Cursor>
  )
}

const Cursor = styled.div`
    position: fixed;
    pointer-events: none;
    z-index: 1000;
    transform: translate(0, 0);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    mix-blend-mode: difference;
    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

export default CustomCursor