import { Land } from "./Land";
import { Mower } from "./Mower";

export class TheGodlyGardener {
    mowers: Array<Mower>;

    constructor(landData: Array<any>) {
        const land = this.createLand(landData.shift());
        this.mowers = [];
        this.createMowers(land, landData);

        this.handleLand();
    }

    createLand(landData: Array<any>): Land {
        const land = landData[0].split('');

        return new Land(land[0], land[1]);
    }

    createMowers(land: Land, mowers: Array<any>): void {
        const mowersCount = mowers.length / 2;

        for (let i = 0; i < mowersCount; i++) {
            const mowerInitialPosition = mowers.shift();
            const mowerInstructions = mowers.shift();

            mowers.push(new Mower(land, mowerInitialPosition, mowerInstructions));
        }
    }

    handleLand() {
        this.mowers.forEach(mower => mower.mow());
    }

}
