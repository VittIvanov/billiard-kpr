import { TableWrapper } from "./styled"
import React, { useRef, useEffect } from 'react'


const BilliardTable: React.FC = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const canvasWrapper = canvas.parentElement as HTMLDivElement
    canvas.width = canvasWrapper.clientWidth
    canvas.height = canvasWrapper.clientHeight

    drawBalls(ctx)

  }, []);

  const drawBalls = (ctx: CanvasRenderingContext2D) => {
    const balls = [
      { x: 50, y: 50, radius: 35, color: 'red' },
      { x: 100, y: 100, radius: 25, color: 'orange' },
      { x: 150, y: 150, radius: 20, color: 'yellow' },
      { x: 200, y: 200, radius: 15, color: 'skyblue' },
      { x: 250, y: 250, radius: 20, color: 'blue' },
      { x: 350, y: 350, radius: 25, color: 'indigo' },
      { x: 300, y: 300, radius: 30, color: 'purple' }
    ]

    balls.forEach(ball => {
      ctx.beginPath()
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
      ctx.fillStyle = ball.color
      ctx.fill()
      ctx.closePath()
    })
  }

  return (
    <TableWrapper>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', border: '1px solid black' }}
      />
    </TableWrapper>
  )
}
export default BilliardTable
