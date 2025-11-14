// Interface for the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementing the interface
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("Alice", "Johnson");

console.log(student1.displayName());      // Alice
console.log(student1.workOnHomework());   // Currently working
