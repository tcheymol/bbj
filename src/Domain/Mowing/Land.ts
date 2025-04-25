import { Mower } from "./Mower";

export class Land {
    xSize: number;
    ySize: number;
    mowedPoints: Array<{x: number, y: number}>;

    constructor(xSize: number, ySize: number) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.mowedPoints = [];
    }

    mowPoint(x: number, y: number): void {
        if (this.mowedPoints.some(point => point.x === x && point.y === y)) {
            return;
        }
        this.mowedPoints.push({x: x, y: y});
    }
}
