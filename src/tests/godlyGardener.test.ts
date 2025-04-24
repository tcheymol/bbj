import fs from 'fs';
import path from 'path';
import { TheGodlyGardener } from "../Domain/Mowing/TheGodlyGardener";

describe('The Godly Gardener basic tests', () => {
    it('should go north', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'F']);
        gardener.handleLand();

        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('01 N');
    });

    it('should turn left', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'L']);
        gardener.handleLand();

        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('00 W');
    });

    it('should turn right', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'R']);
        gardener.handleLand();

        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('00 E');
    });

    it('should turn back and fail exitting the land', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'RRF']);
        gardener.handleLand();

        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('00 S');
    });

    it('should turn right and advance', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'RF']);
        gardener.handleLand();

        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('10 E');
    });
});

describe('The Real life test', () => {
    it('should go through the whole land', () => {
        const gardener = new TheGodlyGardener([
            '55',
            '44 S',
            'LFRRFFLFRFF',
            '22 N',
            'FFRLLRFRLF',
        ]);

        expect(gardener.mowers.length).toBe(2);

        gardener.handleLand();

        const mower1 = gardener.mowers[0];
        const mower2 = gardener.mowers[1];

        expect(mower1.getPosition()).toBe('13 W');
        expect(mower2.getPosition()).toBe('25 N');
    });
});

describe('Test with real file', () => {
    it('should load file', () => {
        const filePath = path.join(__dirname, '../data.txt');
        const content = fs.readFileSync(filePath, 'utf-8');
        const fileLines = content.split('\n');

        const gardener = new TheGodlyGardener(fileLines);

        expect(gardener.mowers.length).toBe(2);

        gardener.handleLand();

        const mower1 = gardener.mowers[0];
        const mower2 = gardener.mowers[1];

        expect(mower1.getPosition()).toBe('13 W');
        expect(mower2.getPosition()).toBe('25 N');
    });
});
