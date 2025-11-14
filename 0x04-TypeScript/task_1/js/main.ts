// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// printTeacher implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher("John", "Doe"));
