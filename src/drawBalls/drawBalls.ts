import { Ball } from "../ballsdata/ballsdata";

export const drawBalls = (ctx: CanvasRenderingContext2D, balls: Ball[]) => {
  balls.forEach((ball: Ball) => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
  });
};
