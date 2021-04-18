"use strict";

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== `number`) continue;
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return max - min;
// };

// const amp = calcTempAmplitude(temperatures);
// console.log(`Amplitude is ${amp}`);

// const temperatures2 = [4, -2, -8, -6, `error`, 9, 20, 17, 15, 90, 9, -75];

// const temperatures3 = temperatures.concat(temperatures2)

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== `number`) continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   return max - min;
// };

// const amp = calcTempAmplitudeNew([3, 5, 0, 9], [17, -2, 6, 3]);
// console.log(`Amplitude is ${amp}`);

// const measureKelvin = function () {
//   const measurment = {
//     type: `temp`,
//     unit: `celsius`,
//     value: prompt(`Degree celsius`),
//   };

//   console.table(typeof measurment.value);

//   let value1 = parseInt(measurment.value);
//   const kelvin = value1 + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const forecast = [17, 21, 23, -5, 0];

const printForecast = function (arr) {
  let str = ``;
  for (let i = 1; i <= arr.length; i++) {
    str = str + `${arr[i]} degrees in ${i} days...`;
  }
  console.log(str);
};

printForecast(forecast);
