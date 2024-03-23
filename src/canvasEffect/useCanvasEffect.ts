import { useEffect, MouseEventHandler } from 'react';

type CanvasEffectProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  drawFunction: (ctx: CanvasRenderingContext2D) => void;
  handleMouseDown: MouseEventHandler<HTMLCanvasElement>;
  handleMouseMove: MouseEventHandler<HTMLCanvasElement>;
  handleMouseUp: MouseEventHandler<HTMLCanvasElement>;
};

const useCanvasEffect = ({
  canvasRef,
  drawFunction,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
}: CanvasEffectProps) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasWrapper = canvas.parentElement as HTMLDivElement;
    canvas.width = canvasWrapper.clientWidth;
    canvas.height = canvasWrapper.clientHeight;

    drawFunction(ctx);


    // Обрабатываем события мыши
    canvas.addEventListener('mousedown', handleMouseDown as any);
    canvas.addEventListener('mousemove', handleMouseMove as any);
    canvas.addEventListener('mouseup', handleMouseUp as any);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown as any);
      canvas.removeEventListener('mousemove', handleMouseMove as any);
      canvas.removeEventListener('mouseup', handleMouseUp as any);
    };
  }, [canvasRef, drawFunction, handleMouseDown, handleMouseMove, handleMouseUp]);
};

export default useCanvasEffect;
