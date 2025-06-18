// Student scores - put your scores here
var scores = [85, 92, 67, 78, 95, 73, 88, 64, 91, 76];

// This function gives a grade based on the score
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Variables to keep track of things
var total = 0;
var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countF = 0;

console.log("Student Grades:");
console.log("---------------");

// Go through each score in the array
for (var i = 0; i < scores.length; i++) {
    var studentScore = scores[i];
    var studentGrade = getGrade(studentScore);
    
    // Show student info
    console.log("Student " + (i + 1) + ": Score = " + studentScore + ", Grade = " + studentGrade);
    
    // Add score to total
    total = total + studentScore;
    
    // Count how many of each grade
    if (studentGrade == "A") {
        countA = countA + 1;
    } else if (studentGrade == "B") {
        countB = countB + 1;
    } else if (studentGrade == "C") {
        countC = countC + 1;
    } else if (studentGrade == "D") {
        countD = countD + 1;
    } else if (studentGrade == "F") {
        countF = countF + 1;
    }
}

// Calculate average
var average = total / scores.length;

console.log("");
console.log("---------------");
console.log("Average Score: " + average);

console.log("");
console.log("Grade Count:");
console.log("A: " + countA + " students");
console.log("B: " + countB + " students");
console.log("C: " + countC + " students");
console.log("D: " + countD + " students");
console.log("F: " + countF + " students");
console.log("Total: " + scores.length + " students");