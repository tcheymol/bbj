import { Mower } from "./Mower";

export class TheGodlyGardener {
  mowers: Array<Mower>;

  constructor(mowers: Array<Mower>) {
    this.mowers = mowers;
  }

  getLand() {
    return this.mowers && this.mowers.length > 0 ? this.mowers[0].land : null;
  }

  handleLand() {
    this.mowers.forEach((mower) => mower.mow());
  }
}
