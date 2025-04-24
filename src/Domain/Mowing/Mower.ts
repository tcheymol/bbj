export class Mower {
    instructions: string;
    x: number;
    y: number;

    constructor(instructions: string, initialX: number, initialY: number) {
        this.instructions = instructions;
        this.x = initialX;
        this.y = initialY;
    }

    move(instruction: string): void {
    }

    mow():void {
    }

    getFinalPosition(): string {
        return `${this.x},${this.y}`;
    }

    printFinalPosition(): void {
        console.log(`Final position: ${this.getFinalPosition()}`);
    }
}
