import React, { useRef } from 'react'
import { useMount } from 'react-use'

import { drawExample } from '../helper/draw'

const Circle = ({ width = 800, height = 600 }) => {
    const circleRef = useRef()

    useMount(() => {
        const canvasElement: HTMLCanvasElement = circleRef.current
        const ctx = canvasElement.getContext('2d')

        drawExample(ctx)
    })

    return (
        <canvas
            width={width}
            height={height}
            ref={circleRef}
            onMouseMove={(e) => {
                console.log(e.clientX, e.clientY)
            }}
        >
            원을 그릴고야
        </canvas>
    )
}

export default Circle
