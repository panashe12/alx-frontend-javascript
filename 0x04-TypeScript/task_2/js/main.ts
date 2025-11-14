// DirectorInterface with 3 methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    return salary < 500 ? new Teacher() : new Director();
  } else if (typeof salary === "string") {
    // remove $ if exists and convert to number
    const numericSalary = Number(salary.replace(/\$/g, ""));
    return numericSalary < 500 ? new Teacher() : new Director();
  }
  // fallback (should never happen)
  return new Teacher();
}

// Testing
console.log(createEmployee(200).constructor.name);  // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee("$500").constructor.name); // Director

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute the correct work based on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Testing
executeWork(createEmployee(200));  // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
