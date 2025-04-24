import { TheGodlyGardener } from "../Domain/Mowing/TheGodlyGardener";

describe('The Godly Gardener basic tests', () => {
    it('should go north', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'F']);
        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('01 N');
    });

    it('should turn left', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'L']);
        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('00 W');
    });

    it('should turn right', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'R']);
        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('00 E');
    });

    it('should turn back and fail exitting the land', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'RRF']);
        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('00 S');
    });

    it('should turn right and advance', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'RF']);
        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('10 E');
    });
});
