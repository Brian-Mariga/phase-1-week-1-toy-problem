//Function to calculate and output a Student's grade bassed on the student's marks
function grading() {
  //A prompt is displayed to the user for marks input
  const enterMarks = prompt("Enter Student's marks for grading:");
  //The input entered in the prompt is converted to a number
  const marks = Number(enterMarks);
  //The input is checked if it is a number
  if (isNaN(marks)) {
    return "Input MUST be a number";
  }
  //The input is checked if its in a valid range
  else if (marks < 0 || marks > 100) {
    return "Marks Must be range from 0 to 100";
  } //The grade is then determined based on the criteria and then it is given out
  else if (marks > 79 && marks <= 100) {
    return "Grade is A";
  } else if (marks >= 60 && marks <= 79) {
    return "Grade is B";
  } else if (marks >= 50 && marks <= 59) {
    return "Grade is C";
  } else if (marks >= 40 && marks <= 49) {
    return "Grade is D";
  } else {
    return "Grade is E";
  }
}
// Call the function to calculate and output the grade
grading();
