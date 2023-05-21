'use strict';

//navbar variables

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);


//theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {

    themeBtn[i].addEventListener('click', function () {
        //toggle 'light and dark' theme class from 'body'
        // when clicked 'theme-btn'
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        for (let i = 0; i< themeBtn.length; i++) {
            //when 'theme-btn' is clicked,
            // it toggles classes between 'light&dark' for all 'theme-btn'
            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');
        }
    })
}


// testing javascript funcotins on the page



//Testing concepts from class function

//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

// function checkStringForJava(word) {
//     return (word.startsWith('Java'))
// };

// console.log(checkStringForJava('Girafa'));

//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

// let inputString = 'Create Ways To Quickly Script Code';

// function checkString(phrase) {
//     return (phrase.split(' ')[4] == 'Script');
// }

// console.log(checkString(inputString));

//Write a JavaScript program to find the largest of three given integers. 

// let numberGroup = [4, 29, 450]

// console.log(Math.max(...numberGroup));

//Write a javascript program that add 3 numbers inside an array.

// function addNumbers(a, b, c) {
//     return a + b + c;
// }

// const numbers = [9, 2, 3];

// const sum = addNumbers(...numbers);

// console.log(sum)

//Write a Javascript program that merges 2 objects into one another.

// const obj1 = { name: 'John', age: 30 };
// const obj2 = { mentalHealth: true, state: 'Rio Grande do Sul' };

// let mergedObjects = {...obj1, ...obj2 };
// console.log(mergedObjects);

//Write a JavaScript program to find the closest value to 100 from two numerical values.


// function checkNumber(n1, n2) {
//     if (((n1 >= 40 && n1 <= 60)||(n1 >=70 && n1 <= 100))&&((n2 >= 40 && n2 <= 60)||(n2 >=70 && n2 <= 100))) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkNumber(40, 100))

//Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

// function checkNumbers(n1, n2) {
//     if ((n1 >= 40 && n1 <=60)&&(n2 >= 40 && n2 <=60)) {
//         if (n1 > n2) {
//             return 'Number 1 is greater'
//         } else {
//             return 'Number 2 is greater'
//         }
//     } else {
//         return 'Numbers not in range'
//     }
// }

// console.log(checkNumbers(23, 42));

//Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 

// function checkString(str, chosenCharacter) {
//     str = str.split(' ');
//     return ((str.indexOf(chosenCharacter) == 1)||(str.indexOf(chosenCharacter) == 2)||(str.indexOf(chosenCharacter) == 3) );
// }

// console.log(checkString('Mary Had A Little Lamb', 'Lamb'));

//Write a JavaScript program that checks whether the last digit of three positive integers is the same.


// function checkLastDigits(n1, n2, n3) {
//     if (n1 > 0 && n2 > 0 && n3 > 0) {
//         return (n1 % 10 == n2 % 10 && n2 % 10 == n3 % 10 && n1 % 10 == n3 % 10)
//     } else {
//         return false;
//     }
// }
// console.log(checkLastDigits(54, 74, 14));

//Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

// function convertString(str) {
//     if (str.length >= 3) {
//         const front_part = (str.substring(0,3)).toLowerCase();
//         const back_part = str.substring(3,str.length);
//         return front_part + back_part; 
//     } else {
//         return str.toUpperCase()
//     }
// }

// console.log(convertString('PyThOn'));

//Write a JavaScript program to check a student's total marks in various examinations. 
//The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. 
//If the student gets an A+ grade, return true, otherwise return false. 

// function calculateGrade(examType, totalMarks){
//     if (examType == 'Final-exam' && totalMarks >= 90) {
//         return true;
//     } else if (totalMarks >=89) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(calculateGrade('Final-exam', 91));

//Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 

// function calculate(n1, n2) {
//     if (Number.isInteger(n1) && Number.isInteger(n2)) {
//         if (n1 + n2 >= 50 && n1 + n2 <= 80) {
//             return 65;
//         } else {
//             return 80;
//         }
//     } else {
//         return false;
//     }
// }
// console.log(calculate(40, -1))

// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

// function checkNumbers(n1, n2) {
//     if ((n1 + n2) == 8 || (n1 - n2) == 8 || (n2 - n1) == 8){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkNumbers(16, 8))

//Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  

// function checkNumbers(n1, n2, n3) {
//     if (n1 == n2 && n2 == n3) {
//         return '3 are the same';
//     } else if (n1 == n2 || n2 == n3 || n3 == n1) {
//         return '2 are the same';
//     } else {
//         return 'None are the same';
//     }
// }

// console.log(checkNumbers(2, 2, 2))