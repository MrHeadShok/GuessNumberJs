'use strict';


// function logger() {
//     console.log("Hola")
// }

// logger();

// function fruitProcessor(oranges, apples) {
//     console.log(oranges, apples);
//     const juice = 'juice with ${apples} apples and ${oranges} oranges';
//     return juice;
// }

// fruitProcessor(5, 0);
// fruitProcessor("Juice", "Apples");

// console.log(fruitProcessor(5, 0))

// function calcAge(birthyear) {
//     return 2020 - birthyear;
// }




// const calcAge2 = function (birthyear) {
//     return 2020 - birthyear;
// }

// const age2=calcAge2(1995)
// console.log(calcAge(1995), age2);

// const calcRetire = (birthYear)=> {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(calcRetire(1991))

// function FirstReverse(str) { 
// var temp= "";
//     for (var i = str.length - 1; i >= 0; i--)
//     {
//         temp = temp+str[i]  
//     }
//     str=temp
//   return str; 

// }
   
// keep this function call here 










// console.log(FirstReverse("hello"));

// function FirstReverse(str) { 
//     let temp = str;
//     str = "";
//   while (temp) {
//     str = str + temp.slice(-1);
//     temp = temp.slice(0, -1);
//   }
//   return str; 
// }


// function MissingDigit(str) { 
//   let elements = str.split(' ');
//   var xChar = "";

//   if (elements.length == 5) {
//     let op = elements[1];
//     let num1 = elements[0].includes("x") ? null : parseInt(elements[0], 10);
//     let num2 = elements[2].includes("x") ? null : parseInt(elements[2], 10);
//     let resNum = elements[4].includes("x") ? null : parseInt(elements[4], 10);

    

//     switch(op) {
//       case "+" :
//         if (num1 == null) {
//           let res = (resNum - num2) + "";
//           xChar = res[elements[0].indexOf("x")];

//         } else if (num2 == null) {
//           let res = (resNum - num1) + "";
//           xChar = res[elements[2].indexOf("x")];

//         } else if (resNum == null) {
//           let res = (num1 + num2) + "";
//           xChar = res[elements[4].indexOf("x")];

//         }

//         break;
//       case "-":
//         if (num1 == null) {
//           let res = (resNum + num2) + "";
//           xChar = res[elements[0].indexOf("x")];

//         } else if (num2 == null) {
//           let res = (num1 - resNum) + "";
//           xChar = res[elements[2].indexOf("x")];

//         } else if (resNum == null) {
//           let res = (num1 - num2) + "";
//           xChar = res[elements[4].indexOf("x")];

//         }

//         break;
//       case "*":
//         if (num1 == null) {
//           let res = (resNum / num2) + "";
//           xChar = res[elements[0].indexOf("x")];

//         } else if (num2 == null) {
//           let res = (num1 / resNum) + "";
//           xChar = res[elements[2].indexOf("x")];

//         } else if (resNum == null) {
//           let res = (num1 * num2) + "";
//           xChar = res[elements[4].indexOf("x")];

//         }

//         break;
//       case "/":
//         if (num1 == null) {
//           let res = (resNum * num2) + "";
//           xChar = res[elements[0].indexOf("x")];

//         } else if (num2 == null) {
//           let res = (num1 / resNum) + "";
//           xChar = res[elements[2].indexOf("x")];

//         } else if (resNum == null) {
//           let res = (num1 / num2) + "";
//           xChar = res[elements[4].indexOf("x")];

//         }
//         break;
//     }
//   }
  
//   // code goes here  
//   return xChar; 

// }
   
// // keep this function call here 
// console.log(MissingDigit(readline()));

// function TwoSum(arr) {
//   let num = arr[0];
//   var arrRes = [];
//   var resStr = "";
//   for (let i = 1; i < arr.length; i++) {
//     var n = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((n + arr[j]) == num) {
//         arrRes.push(n);
//         arrRes.push(arr[j]);
//         let pair = n + "," + arr[j];

//         resStr = resStr + " " + pair
        
//         break;
//       }
//     }
//   }
// }



// const calcAverage = (a, b, c) => {
//   return (a+b+c)/3
// }


// const scoreDolph = calcAverage(40, 70, 20)
// const scoreKoala = calcAverage(60, 70, 30)

// const checkWinner = (a, b) => {
//   if (a > b) {
//     console.log("Dolphins win")
//   } else {
//     console.log("Koala win")
//   }
// }

// console.log(checkWinner(scoreDolph, scoreKoala));


// const me = {
//   age: Number,
//   name: 'Taieb',
//   job: String,
//   friends: Array,
//   birthYear: 1995,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   }

// }

// // const input = prompt('type in name');
// // console.log(me[input]);
// console.log(me.calcAge())
// console.log(me.age)


// const Mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     hight: 1.69,
//     weight: 78,
    
//     bmiMark: function () {
//         this.bmi = this.weight / (this.hight * 2)
//         return this.bmi;
//     }

// }

// const John = {
//     firstName: 'Jhon',
//     lastName: 'Smith',
//     hight: 1.95,
//     weight: 92,
    
//     bmiJohn: function () {
//         this.bmi = this.weight / (this.hight * 2)
//         return this.bmi;
//     }
   
// }

// console.log(Mark.bmiMark());

// console.log(John.bmiJohn());

// Mark.bmiMark()
// John.bmiJohn()

// if (Mark.bmiMark() > John.bmiJohn()) {
//     console.log(`${Mark.lastName} ${Mark.firstName} has a higher BMI (${Mark.bmi}) than ${John.lastName} ${John.lastName} (${Mark.bmi}) `)
// } else if (Mark.bmiMark() < John.bmiJohn()) {
//     console.log(`${John.lastName} ${John.lastName} has a higher BMI (${John.bmi}) than ${Mark.lastName} ${Mark.firstName} (${Mark.bmi})`)
// } else {
//     console.log("Equal BMI")
// }



// const me = [
//     'Taieb',
//     'mf',
//     ['Bot1', 'Bot2', 'Bot3'],
//     1995-2020

// ]

// const em=[]

// for (let i = me.length - 1; i >= 0; i--){
//  em.push(me[i])
// }

// console.log(em)

// let dice = Math.trunc(Math.random() * 6)+1

// while (dice !== 6) {
//     console.log(`you logged ${dice}`)
//     dice = Math.trunc(Math.random() * 6)+1
// }


const calcTip = function (bill) {
    return bill >= 55 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
    
for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip)
    totals.push(tip + bills[i]);
}

console.log(tips, totals)


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcAverage=function(arr) {
    var total = 0;
    var avg = 1;
    for (let i = 0; i < arr.length; i++){
        total=arr[i]+total
    }
    return avg = total / arr.length;

}

console.log(calcAverage(bills))