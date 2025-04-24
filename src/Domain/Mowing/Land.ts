import { Mower } from "./Mower";

export class Land {
    xSize: number;
    ySize: number;
    mowers: Mower[];

    constructor(xSize: number, ySize: number) {
        this.xSize = xSize;
        this.ySize = ySize;
        this.mowers = [];
    }

    addMower(mower: Mower): void {
        this.mowers.push(mower);
    }
}
