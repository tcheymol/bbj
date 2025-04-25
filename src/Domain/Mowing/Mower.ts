import { Land } from "./Land";

export class Mower {
  instructions: string;
  x: number;
  y: number;
  direction: string;
  land: Land;

  constructor(land: Land, initialPosition: string, instructions: string) {
    this.land = land;
    this.instructions = instructions;
    const splittedInitialPosition = initialPosition.split(" ");
    const [initialX, initialY] = splittedInitialPosition[0].split("");
    this.x = parseInt(initialX);
    this.y = parseInt(initialY);
    this.direction = splittedInitialPosition[1];
  }

  move(instruction: string): void {
    this.mowCurrentPosition();
    switch (instruction) {
      case "F":
        this.advance();
        break;
      case "L":
        this.pivotLeft();
        break;
      case "R":
        this.pivotRight();
        break;
    }
    this.mowCurrentPosition();
  }

  mow(): void {
    const instructions = this.instructions.split("");

    while (instructions.length > 0) {
      const instruction = instructions.shift();
      this.instructions = instructions.join("");
      if (instruction) {
        this.move(instruction);
      }
    }
  }

  mowCurrentPosition(): void {
    this.land.mowPoint(this.x, this.y);
  }

  getPosition(): string {
    return `${this.x}${this.y} ${this.direction}`;
  }

  getCoordinates(): string {
    return `${this.x}${this.y}`;
  }

  printPosition(): void {
    console.log(`Final position: ${this.getPosition()}`);
  }

  advance(): void {
    switch (this.direction) {
      case "N":
        this.y++;
        break;
      case "S":
        this.y--;
        break;
      case "E":
        this.x++;
        break;
      case "W":
        this.x--;
        break;
    }

    this.preventOverflow();
  }

  pivotLeft(): void {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "W":
        this.direction = "S";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
    }
  }

  pivotRight(): void {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
  }

  preventOverflow(): void {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x >= this.land.xSize - 1) {
      this.x = this.land.xSize - 1;
    } else if (this.y < 0) {
      this.y = 0;
    } else if (this.y >= this.land.ySize - 1) {
      this.y = this.land.ySize - 1;
    }
  }
}
