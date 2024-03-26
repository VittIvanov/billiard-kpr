import { TableWrapper } from "./styled";
import React, { useState, useRef, useEffect, MouseEventHandler } from 'react';
import { drawBalls } from "../../drawBalls/drawBalls";
import { balls as ballData, Ball } from "../../ballsdata/ballsdata";
import useCanvasEffect from "../../canvasEffect/useCanvasEffect";
import { useMouseDrag } from "../../handler/handler";



// Функция для изменения положения ударенного шара
const moveHitBall = (ball: Ball, directionVector: { x: number, y: number }) => {
  // Вычисляем новые координаты шара, добавляя значения из directionVector
  ball.x += directionVector.x;
  ball.y += directionVector.y;
};

const BilliardTable: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { handleMouseDown, handleMouseUp, directionVector } = useMouseDrag();
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null); // Хранит ID текущего кадра анимации

  // Обработчик для обновления позиций шаров и перерисовки холста
  // Обработчик для обновления позиций шаров и перерисовки холста
  const updateCanvas = () => {
    console.log("Updating canvas"); // Добавляем отладочный вывод

    // Если есть направление удара, перемещаем ударенный шар
    if (directionVector && ballData.length > 0) {
      moveHitBall(ballData[0], directionVector);
    }

    // Получаем контекст холста
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Очищаем холст
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Обновляем позиции шаров и отрисовываем их
    ballData.forEach(ball => {
      // Добавляем скорость к позициям шара
      ball.x += 5 * directionVector.x;
      ball.y += 5 * directionVector.y;
      // Отрисовываем шар
      drawBalls(ctx, [ball]);
    });

    // Запрашиваем следующий кадр анимации
    setAnimationFrameId(requestAnimationFrame(updateCanvas));
  };


  // Эффект для запуска анимации при монтировании компонента
  useEffect(() => {
    // Начинаем анимацию
    setAnimationFrameId(requestAnimationFrame(updateCanvas));

    // Очищаем кадр анимации при размонтировании компонента
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []); // Зависимости пусты, так как эффект должен выполниться только один раз при монтировании

  useCanvasEffect({
    canvasRef,
    drawFunction: (ctx) => drawBalls(ctx, ballData)
  });

  return (
    <TableWrapper>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', border: '1px solid black' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </TableWrapper>
  );
};

export default BilliardTable;
