import { User } from './user.model';

describe('User getAge()', () => {
  const today = new Date(2024, 4, 20);

  function createUser(dateOfBirth: string): User {
    const user = new User();
    user.dateOfBirth = dateOfBirth;
    return user;
  }

  it('1. should calculate age when birthday has passed', () => {
    expect(createUser('2000-01-15').getAge(today)).toBe(24);
  });

  it('2. should calculate age when birthday is today', () => {
    expect(createUser('2000-05-20').getAge(today)).toBe(24);
  });

  it('3. should calculate age when birthday has not arrived', () => {
    expect(createUser('2000-12-15').getAge(today)).toBe(23);
  });

  it('4. should calculate age one day before birthday', () => {
    expect(createUser('2000-05-21').getAge(today)).toBe(23);
  });

  it('5. should calculate age one day after birthday', () => {
    expect(createUser('2000-05-19').getAge(today)).toBe(24);
  });

  it('6. should handle a leap day birthday', () => {
    expect(createUser('2004-02-29').getAge(today)).toBe(20);
  });

  it('7. should calculate age for a newborn', () => {
    expect(createUser('2024-05-20').getAge(today)).toBe(0);
  });

  it('8. should reject an invalid date', () => {
    expect(() => createUser('2023-02-29').getAge(today))
      .toThrowError('Invalid date');
  });

  it('9. should reject a future date', () => {
    expect(() => createUser('2025-01-01').getAge(today))
      .toThrowError('Date of birth cannot be in the future');
  });

  it('10. should reject an empty date of birth', () => {
    expect(() => createUser('').getAge(today))
      .toThrowError('Date of birth is required');
  });
});