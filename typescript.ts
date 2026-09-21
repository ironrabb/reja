// Compiled Language: Java, GoLang, C, C++, C#, Rust    =>   Compiling & Running

// Interpreted Language: NodeJS, Python, PHP, Ruby       =>   Running

// Error Type
let box: string;
box = "hello";
// box = 100;
const counter: number = 100;
let stage: number | string = "hello";
stage = 100;
// boolen uchun
const pending: boolean = true;

// interface
interface Person {
  name: string;
  age: number;
  nation: string;
}
// objectlarda
const person: Person = {
  name: "Martin",
  age: 30,
  nation: "Australian",
};
//arraylarda
let skills: string[];
skills = ["Problem Sovling", "Software Design", "Programming", "100p"];
// classlarda typescript
class Person {
  age: number;
  firstName: string;
  lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person(30, "Martin", "Robertson");
