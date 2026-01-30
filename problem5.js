// Print each student’s name and marks.

const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 90 }
];

for (let student of students) {
  console.log(student.name + " scored " + student.marks);
}