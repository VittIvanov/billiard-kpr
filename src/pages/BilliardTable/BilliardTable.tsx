import { TableWrapper } from "./styled";
import React, { useState, useRef, MouseEventHandler } from 'react';
import { balls as ballData, Ball } from "../../ballsdata/ballsdata";
import useCanvasEffect from "../../canvasEffect/useCanvasEffect";
import useBallMovement from "../../ballMovement/useBallMovement";

const BilliardTable: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [balls, setBalls] = useState<Ball[]>([]);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [endPos, setEndPos] = useState<{ x: number; y: number } | null>(null);


  useBallMovement({ startPos, endPos, balls, setBalls });

  const drawBalls = (ctx: CanvasRenderingContext2D) => {
    ballData.forEach((ball: Ball) => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();
    });
  };

  const handleMouseDown: MouseEventHandler<HTMLCanvasElement> = (event) => {
    const startX = event.clientX;
    const startY = event.clientY;
    setStartPos({ x: startX, y: startY });
  };

  const handleMouseMove: MouseEventHandler<HTMLCanvasElement> = (event) => {
    // Тут можно обработать движение мыши во время толчка, если нужно
  };

  const handleMouseUp: MouseEventHandler<HTMLCanvasElement> = (event) => {
    const endX = event.clientX;
    const endY = event.clientY;
    setEndPos({ x: endX, y: endY });
  };

  useCanvasEffect({
    canvasRef,
    drawFunction: (ctx) => drawBalls(ctx),
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  });

  return (
    <TableWrapper>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', border: '1px solid black' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </TableWrapper>
  );
};

export default BilliardTable;
