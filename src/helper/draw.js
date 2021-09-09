export const hello = () => {
    console.log('hello')
}

/**
 * 캔버스 사용 가능 여부 반환
 * @param ctx
 * @returns {boolean}
 */
export const isDrawable = (ctx) => !!ctx.getContext

export const drawRect = ({ ctx, style, rect }) => {
    if (style) {
        ctx.fillStyle = style
    }
    ctx.fillRect(...rect)
}
// todo 1. 원을 그리는 기능
// todo 2. 부채꼴을 그리는 기능
// todo 3. 시간표를 채우기 위해 마우스의 움직임을 판별하는 기능
// todo 4. 마우스가 원 안으로 들어왔는지 판별하는 기능
// todo 5. 마우스의 움직임에서 각도(degree)를 알아내는 기능
// todo 6. 시작 각도부터 마지막 각도까지의 중간각(degree)을 알아낸 뒤에 좌표로 바꾸는 기능

// 뭘 계산한다든지
// 계산된 값으로 뭘 그린다든지
// 현재 캔버스에 마우스가 클릭 된 좌표 정보를 가져온다든지
// 캔버스 지우기
// 지웠다 다시 그리기
// 주어진 정보로 한 번에 여러가지 기능 그리기
