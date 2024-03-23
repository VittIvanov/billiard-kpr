
export interface Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
}

export const balls: Ball[] = [
  { x: 50, y: 50, radius: 35, color: 'red' },
  { x: 100, y: 100, radius: 25, color: 'orange' },
  { x: 150, y: 150, radius: 20, color: 'yellow' },
  { x: 200, y: 200, radius: 15, color: 'skyblue' },
  { x: 250, y: 250, radius: 20, color: 'blue' },
  { x: 350, y: 350, radius: 25, color: 'indigo' },
  { x: 300, y: 300, radius: 30, color: 'purple' }
];
