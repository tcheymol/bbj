import { TheGodlyGardener } from "../Domain/Mowing/TheGodlyGardener";

describe('The Godly Gardener basic tests', () => {
    it('should handle the land', () => {
        const gardener = new TheGodlyGardener(['55', '00 N', 'F']);

        const mower = gardener.mowers[0];

        expect(mower.getPosition()).toBe('01 N');
    });
});
