// ---------------- Interfaces ----------------
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ---------------- Classes ----------------
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

// ---------------- Factory Function ----------------
function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary: number;

  if (typeof salary === "number") {
    numericSalary = salary;
  } else {
    numericSalary = Number(salary.replace(/\$/g, ""));
  }

  return numericSalary < 500 ? new Teacher() : new Director();
}

// ---------------- Type Predicate ----------------
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ---------------- Execute Work Function ----------------
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// ---------------- Testing ----------------
console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee("$500").constructor.name); // Director

executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
