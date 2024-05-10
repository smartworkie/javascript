const calculateGrade = (score) => {
    if (score>=90 && score<=100){
        return 'A';
    }
    if (score>=80 && score<=89){
        return 'B';
    }
    if (score>=70 && score<=79){
        return 'C'
    }
    if (score>=60 && score<=69){
        return 'D'
    }
    if (score<60){
        return 'F'
    }
    else{
        return 'invalid score!'
    }

}

//Test Cases
console.log(calculateGrade(90))
console.log(calculateGrade(30));
console.log(calculateGrade(79));
console.log(calculateGrade(65));
console.log(calculateGrade(85));
console.log(calculateGrade(69));
console.log(calculateGrade(57));
console.log(calculateGrade(70));
console.log(calculateGrade(93));
console.log(calculateGrade(120))