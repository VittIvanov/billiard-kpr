import { useEffect } from 'react';

interface Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
}

interface Position {
  x: number;
  y: number;
}

interface Props {
  startPos: Position | null;
  endPos: Position | null;
  balls: Ball[];
  setBalls: React.Dispatch<React.SetStateAction<Ball[]>>;
}

const useBallMovement = ({ startPos, endPos, balls, setBalls }: Props): void => {
  useEffect(() => {
    if (startPos && endPos) {
      const dx = endPos.x - startPos.x;
      const dy = endPos.y - startPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 20; // px в секунду
      const vx = (dx / distance) * speed;
      const vy = (dy / distance) * speed;

      const intervalId = setInterval(() => {
        setBalls(prevBalls => (
          prevBalls.map(ball => ({
            ...ball,
            x: ball.x + vx,
            y: ball.y + vy
          }))
        ));
      }, 1000 / speed); // Обновляем координаты каждую секунду

      // Очищаем интервал при размонтировании компонента или при изменении состояния
      return () => clearInterval(intervalId);
    }
  }, [startPos, endPos, balls, setBalls]);
};

export default useBallMovement;
