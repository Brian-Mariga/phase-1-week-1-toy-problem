function grading(){
    const enterMarks = prompt("Enter Student's marks for grading:");
    const marks = Number(enterMarks);
    if (isNaN(marks)){
        return "Input MUST be a number"
    } else if (marks <0 || marks > 100){
        return "Marks Must be range from 0 to 100"
    } else if (marks >79 && marks <=100){
        return "Grade is A"
    } else if (marks >=60 && marks <=79){
        return "Grade is B"
    } else if (marks >=50 && marks <=59){
        return "Grade is C"
    } else if (marks >=40 && marks <=49){
        return "Grade is D"
    } else{
        return "Grade is E"
    }
}
grading();
