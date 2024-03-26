
export interface Ball {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  hitted: boolean;
}

export const balls: Ball[] = [
  { id: 1, x: 50, y: 50, radius: 35, color: 'red', speed: 0, hitted: false },
  { id: 2, x: 100, y: 100, radius: 25, color: 'orange', speed: 0, hitted: false },
  { id: 3, x: 150, y: 150, radius: 20, color: 'yellow', speed: 0, hitted: false },
  { id: 4, x: 200, y: 200, radius: 15, color: 'skyblue', speed: 0, hitted: false },
  { id: 5, x: 250, y: 250, radius: 20, color: 'blue', speed: 0, hitted: false },
  { id: 6, x: 350, y: 350, radius: 25, color: 'indigo', speed: 0, hitted: false },
  { id: 7, x: 300, y: 300, radius: 30, color: 'purple', speed: 0, hitted: false }
];
