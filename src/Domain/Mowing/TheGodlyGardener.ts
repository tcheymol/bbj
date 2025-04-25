import { Land } from "./Land";
import { Mower } from "./Mower";

export class TheGodlyGardener {
    mowers: Array<Mower>;
    land: Land;

    constructor(landData: Array<any>) {
        this.land = this.createLand(landData.shift());
        this.mowers = [];
        this.createMowers(this.land, landData);
    }

    getLand(): Land {
        if (this.mowers.length === 0) return new Land(0, 0);

        return this.mowers[0].land;
    }

    createLand(landData: string|undefined): Land {
        if (!landData) return new Land(0,0);
        const land = landData.split('');

        return new Land(parseInt(land[0]), parseInt(land[1]));
    }

    createMowers(land: Land, mowers: Array<any>): void {
        const mowersCount = Math.floor(mowers.length / 2);

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
