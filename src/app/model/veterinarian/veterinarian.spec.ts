import { Veterinarian } from './veterinarian';

describe('Veterinarian', () => {
  it('should create an instance', () => {
    expect(new Veterinarian(0,0,"","", "", "", "", "",)).toBeTruthy();
  });
});
