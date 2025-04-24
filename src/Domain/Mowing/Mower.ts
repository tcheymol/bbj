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
        const splittedInitialPosition = initialPosition.split(' ');
        const [initialX, initialY] = splittedInitialPosition[0].split('');
        this.x = parseInt(initialX);
        this.y = parseInt(initialY);
        this.direction = splittedInitialPosition[1];
    }

    move(instruction: string): void {
    }

    mow():void {
    }

    getPosition(): string {
        return `${this.x}${this.y} ${this.direction}`;
    }

    printPosition(): void {
        console.log(`Final position: ${this.getPosition()}`);
    }
}
