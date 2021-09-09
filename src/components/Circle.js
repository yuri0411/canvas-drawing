import React, { useRef } from 'react'
import { useMount } from 'react-use'

import { drawRect } from '../helper/draw'

const Circle = ({ width = 800, height = 600 }) => {
    const circleRef = useRef()

    useMount(() => {
        const ctx = circleRef.current.getContext('2d')

        drawRect({ ctx, rect: [30, 30, 50, 50] })
        drawRect({
            ctx,
            style: 'rgba(0, 0, 200, 0.5)',
            rect: [10, 10, 50, 50],
        })
    })

    return (
        <canvas width={width} height={height} ref={circleRef}>
            원을 그릴고야
        </canvas>
    )
}

export default Circle
