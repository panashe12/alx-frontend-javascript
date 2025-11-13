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
