import { MouseEvent, useState } from 'react';
import { balls } from '../ballsdata/ballsdata';

type MouseCoordinates = { mouseX: number; mouseY: number } | null;
type DirectionVector = { x: number; y: number };

export const useMouseDrag = () => {
  const [prevMouseCoords, setPrevMouseCoords] = useState<MouseCoordinates>(null);
  const [hitBallId, setHitBallId] = useState<number | null>(null);
  const [directionVector, setDirectionVector] = useState<DirectionVector>({ x: 0, y: 0 });

  const getMouseCoordinates = (e: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>): MouseCoordinates => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    const isHit = balls.some((ball) => {
      const distance = Math.sqrt((ball.x - mouseX) ** 2 + (ball.y - mouseY) ** 2);
      return distance < ball.radius;
    });

    return isHit ? { mouseX, mouseY } : null;
  };

  const handleMouseDown = (e: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>) => {
    const mouseCoordinates = getMouseCoordinates(e);
    if (mouseCoordinates) {
      const { mouseX, mouseY } = mouseCoordinates;
      const hitBall = balls.find((ball) => {
        const distance = Math.sqrt((ball.x - mouseX) ** 2 + (ball.y - mouseY) ** 2);
        return distance < ball.radius;
      });
      if (hitBall) {
        setHitBallId(hitBall.id);
      }
      console.log('мыш нажат', mouseX, mouseY);
      setPrevMouseCoords(mouseCoordinates); // Сохраняем текущие координаты мыши только при нажатии
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>) => {
    const mouseCoordinates = getMouseCoordinates(e);

    if (mouseCoordinates && prevMouseCoords) {
      const { mouseX: newMouseX, mouseY: newMouseY } = mouseCoordinates;
      const { mouseX: prevMouseX, mouseY: prevMouseY } = prevMouseCoords;

      // Вычисляем вектор направления удара
      const newDirectionVector = {
        x: newMouseX - prevMouseX,
        y: newMouseY - prevMouseY
      };

      setDirectionVector(newDirectionVector);
      console.log("Направление удара:", newDirectionVector);
      console.log('мыш отпущен', newMouseX - prevMouseX, newMouseY - prevMouseY,)

      // Проверяем попадание в шар и изменяем его скорость
      for (const ball of balls) {
        const distance = Math.sqrt((ball.x - newMouseX) ** 2 + (ball.y - newMouseY) ** 2);
        if (distance < ball.radius && ball.id === hitBallId) {
          ball.speed = 10;
          break;
        }
      }

      // Сбрасываем hitBallId
      setHitBallId(null);
    }
  };

  return { handleMouseDown, handleMouseUp, directionVector };
};
