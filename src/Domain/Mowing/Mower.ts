export class Mower {
    instructions: string;
    x: number;
    y: number;
    direction: string;

    constructor(initialPosition: string, instructions: string) {
        this.instructions = instructions;
        const [initialX, initialY, initialDirection] = initialPosition.split(' ');
        this.x = parseInt(initialX);
        this.y = parseInt(initialY);
        this.direction = initialDirection;
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
