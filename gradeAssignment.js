function gradeAssignment() {
  let grade = prompt("Enter your grade: ");
  if (grade >= 90) {
      alert("Your grade is: Excellent");
  } else if (grade >= 80) {
      alert("Your grade is: Good");
  } else if (grade >= 70) {
      alert("Your grade is: Fair");
  } else {
      alert("Needs Improvement");
  }
}