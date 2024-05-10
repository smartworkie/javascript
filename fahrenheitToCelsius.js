const fahrenheitToCelsius = (F) =>{
    const C = (F-32) * 5/9
    return C;

}

//Test Cases
console.log(fahrenheitToCelsius(43))
console.log(fahrenheitToCelsius(120))
console.log(fahrenheitToCelsius(-23))
console.log(fahrenheitToCelsius(-40))
console.log(fahrenheitToCelsius(1000))
console.log(fahrenheitToCelsius(56))
console.log(fahrenheitToCelsius(40.4))
console.log(fahrenheitToCelsius(92))