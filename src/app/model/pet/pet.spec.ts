import { Pet } from './pet';

describe('Pet', () => {
  it('should create an instance', () => {
    expect(new Pet(0, "", "", new Date(), 0, "", "", "")).toBeTruthy();
  });
});
