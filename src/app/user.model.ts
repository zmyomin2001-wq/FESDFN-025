
export class User {
  userEmail: string = '';
  userPassword: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userTel: string = '';
  dateOfBirth: string = '';

  getAge(today: Date = new Date()): number {
    if (!this.dateOfBirth) {
      throw new Error('Date of birth is required');
    }

    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.dateOfBirth);

    if (!match) {
      throw new Error('Invalid date format');
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const birthDate = new Date(year, month - 1, day);

    if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() !== month - 1 ||
      birthDate.getDate() !== day
    ) {
      throw new Error('Invalid date');
    }

    if (birthDate > today) {
      throw new Error('Date of birth cannot be in the future');
    }

    let age = today.getFullYear() - year;

    if (
      today.getMonth() + 1 < month ||
      (today.getMonth() + 1 === month && today.getDate() < day)
    ) {
      age--;
    }

    return age;
  }
}