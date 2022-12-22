function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.sayGrade = function() {
  console.log(this.grade)
}

const student1 = new Student("Harry", 12);
student1.sayName();
student1.sayGrade();