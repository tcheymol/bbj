export class Land {
  xSize: number;
  ySize: number;
  mowedPoints: Array<{ x: number; y: number }>;

  constructor(maxX: number, maxY: number) {
    this.xSize = maxX + 1;
    this.ySize = maxY + 1;
    this.mowedPoints = [];
  }

  mowPoint(x: number, y: number): void {
    if (this.mowedPoints.some((point) => point.x === x && point.y === y)) {
      return;
    }
    this.mowedPoints.push({ x: x, y: y });
  }
}
