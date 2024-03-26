import { useEffect, MouseEventHandler } from 'react';

type CanvasEffectProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  drawFunction: (ctx: CanvasRenderingContext2D) => void;
};

const useCanvasEffect = ({
  canvasRef,
  drawFunction,
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

    drawFunction(ctx)


  }, [canvasRef, drawFunction]);
};

export default useCanvasEffect;
