// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest


// describe("name of function", () => {
//   test("description of action to take place", () => {
//     expect(nameOfFunction(argument)).toEqual("output")
//   })
// })

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// Create a function - evenDiv
// Parameter - num
// Conditional - modulo to determine if the number is divisible by 3


// a) Create a test with expect statements for each of the variables provided.

describe("evenDiv", () => {
  test("decides if the number is evenly divisble by three or not", () => {
    var num1 = 15
    // Expected output: "15 is divisible by three"
    expect(evenDiv(num1)).toEqual("15 is divisible by three")
    var num2 = 0
    // Expected output: "0 is divisible by three"
    expect(evenDiv(num2)).toEqual("0 is divisible by three")
    var num3 = -7
    // Expected output: "-7 is not divisible by three"
    expect(evenDiv(num3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.

const evenDiv = (num) => {
  if(num % 3 === 0){
    return `${num} is divisible by three`
  } else {
    return `${num} is not divisible by three`
  }
}

// describe("name of function", () => {
//   test("description of action to take place", () => {
//     expect(nameOfFunction(argument)).toEqual("output")
//   })
// })

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Create a function - allCaps
// Parameter - array
// Iterate - map, value - each string
// value[0] - uppercase
// substring

// a) Create a test with expect statements for each of the variables provided.

describe("allCaps", () => {
  test("returns an array with all the words capitalized", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// b) Create the function that makes the test pass.

const allCaps = (array) => {
  return array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
}

// describe("name of function", () => {
//   test("description of action to take place", () => {
//     expect(nameOfFunction(argument)).toEqual("output")
//   })
// })

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Create a function - firstVowel
// Parameter - string
// Iterate - look at each character in the string, for loop
// Conditional statement - charAt() compare to all the vowels using ||
// Return i

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  test("logs the index of the first vowel", () => {
    var vowelTester1 = "learn"
    // Expected output: 1
    expect(firstVowel(vowelTester1)).toEqual(1)
    var vowelTester2 = "Academy"
    // Expected output: 0
    expect(firstVowel(vowelTester2)).toEqual(0)
    var vowelTester3 = "challenge"
    // Expected output: 2
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// b) Create the function that makes the test pass.

const firstVowel = (string) => {
  for(let i=0; i<string.length; i++){
    let letter = string[i].toLowerCase()
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
      return i
    }
  }
}
