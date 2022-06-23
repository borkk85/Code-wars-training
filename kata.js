// Complete the square sum function so that it squares each number passed into 
// it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  
    let sum = 0
    
    for( let i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], 2)
    }
    return sum
  }

  
  // Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
 }
 
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Convert a Number to a String!

function numberToString(num) {
  num = num.toString()
   return num
 }

//Even or Odd

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
 }

//Opposite number

function opposite(number) {
  return -number
}

//Calculate BMI

function bmi(weight, height) {
  product = weight/(height*height);
  if(product <= 18.5){
    return "Underweight"
  } else if(product <= 25.0) {
    return "Normal"
  }else if(product <= 30.0) {
    return "Overweight"
  }else if(product => 300) {
    return "Obese"
  }else{
    return ""
  }
}

bmi(154, 5.5)

//Returning Strings

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

//Multiply

function multiply(a, b){
  return a * b
}

//In this simple assignment you are given a number and have to make it negative. 
//But maybe the number is already negative?

function makeNegative(num) {
  return -Math.abs(num)
}
makeNegative(1)


// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) sum += arr[i]
  }
  return sum
}


function positiveSum(arr) {
  let sum = 0
  arr.forEach(num => num > 0 && (sum += num))
  return sum
}