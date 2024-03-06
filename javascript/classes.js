class College {
  constructor(name, year) {
    this.cname = name;
    this.cyear = year;
  }

  // methods

  callname() {
    return `the student college name is ${this.cname}`;
  }

  static names() {
    return ` this is the static name for the class`;
  }
}

let student = new College("sathyabama", 5);

console.log(student.cyear);
console.log(student.callname());
console.log(College.names());
