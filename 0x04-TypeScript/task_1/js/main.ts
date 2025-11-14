// Teacher interface
interface Teacher {
  readonly firstName: string;        // can only be set at initialization
  readonly lastName: string;         // can only be set at initialization
  fullTimeEmployee: boolean;         // must always be defined
  yearsOfExperience?: number;        // optional
  location: string;                  // must always be defined
  [key: string]: any;                // allow extra attributes
}

// Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;           // required for Directors
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                   // extra attribute allowed
};

console.log('Teacher:', teacher3);

// Example Director object
const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

/* ----------------------------------------------
   PRINT TEACHER FUNCTION (Accepts object + F. LastName)
----------------------------------------------- */

// Interface for the object parameter
interface TeacherName {
  firstName: string;
  lastName: string;
}

// Interface for the function type
interface printTeacherFunction {
  (teacher: TeacherName): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (teacher) => {
  const firstInitial = teacher.firstName.charAt(0);
  return `${firstInitial}. ${teacher.lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));   // J. Doe
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" })); // J. Smith
