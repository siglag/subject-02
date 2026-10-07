function calculateGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid";
  }

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

function checkAccess(age, hasTicket) {
  if (age >= 18 && hasTicket === true) {
    return true;
  }

  return false;
}

console.log("Grade 100:", calculateGrade(100));
console.log("Grade 90:", calculateGrade(90));
console.log("Grade 89:", calculateGrade(89));
console.log("Grade 80:", calculateGrade(80));
console.log("Grade 79:", calculateGrade(79));
console.log("Grade 0:", calculateGrade(0));
console.log("Grade -1:", calculateGrade(-1));
console.log("Grade 101:", calculateGrade(101));

console.log("Does `17` has access?", checkAccess(17, true));
console.log("Does `18` has access?", checkAccess(18, true));
console.log("Does `18` has access?", checkAccess(18, false));
console.log("Does `20` has access?", checkAccess(20, true));
