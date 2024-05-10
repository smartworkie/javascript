const classifyGrade = (score) => {
    if(score>=90) {
        return 'A';
    }
    if(score>=80 && score<=89){
        return 'B';
    }
    if (score>=70 && score<=79){
        return 'C';
    }
    if (score>=60 && score<=69){
        return 'D';
    }
    else{
        return 'F';
    }
}

//Test cases
console.log(classifyGrade(97))
console.log(classifyGrade(75))
console.log(classifyGrade(69))
console.log(classifyGrade(50))
console.log(classifyGrade(82))