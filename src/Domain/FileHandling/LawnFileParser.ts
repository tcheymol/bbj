import { Land } from "../Mowing/Land";
import { Mower } from "../Mowing/Mower";
import { FileParser } from "./FileParser";

export class LawnFileParser implements FileParser {
  parse(rows: string[]): Array<Mower> {
    const landRow = rows.shift();
    const land = this.createLand(landRow);

    return this.createMowers(land, rows);
  }

  createLand(landData: string | undefined): Land {
    if (!landData) return new Land(0, 0);

    const land = landData.split("");

    return new Land(parseInt(land[0]), parseInt(land[1]));
  }

  createMowers(land: Land, mowersData: Array<any>): Array<Mower> {
    const mowers = [];
    const mowersCount = Math.floor(mowersData.length / 2);

    for (let i = 0; i < mowersCount; i++) {
      const mowerInitialPosition = mowersData.shift();
      const mowerInstructions = mowersData.shift();

      mowers.push(new Mower(land, mowerInitialPosition, mowerInstructions));
    }

    return mowers;
  }
}
