import { LawnFileParser } from "../FileHandling/LawnFileParser";
import { Land } from "./Land";
import { Mower } from "./Mower";

export class TheGodlyGardener {
    mowers: Array<Mower>;
    land: Land;

    constructor(landData: Array<any>) {
        const {land, mowers} = (new LawnFileParser()).parse(landData);
        this.land = land
        this.mowers = mowers;
    }

    getLand(): Land {
        if (this.mowers.length === 0) return new Land(0, 0);

        return this.mowers[0].land;
    }

    handleLand() {
        this.mowers.forEach(mower => mower.mow());
    }
}
