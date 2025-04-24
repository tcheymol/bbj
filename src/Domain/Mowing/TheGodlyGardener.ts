import { Land } from "./Land";
import { Mower } from "./Mower";

export class TheGodlyGardener {
    mowers: Array<Mower>;

    constructor(landData: Array<any>) {
        const land = this.createLand(landData.shift());
        this.mowers = [];
        this.createMowers(land, landData);
    }

    createLand(landData: string): Land {
        const land = landData.split('');

        return new Land(parseInt(land[0]), parseInt(land[1]));
    }

    createMowers(land: Land, mowers: Array<any>): void {
        const mowersCount = mowers.length / 2;

        for (let i = 0; i < mowersCount; i++) {
            const mowerInitialPosition = mowers.shift();
            const mowerInstructions = mowers.shift();

            this.mowers.push(new Mower(land, mowerInitialPosition, mowerInstructions));
        }
    }

    handleLand() {
        this.mowers.forEach(mower => mower.mow());
    }

}
