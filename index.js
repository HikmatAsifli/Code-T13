// ! Task-1 Prompt vasitesile daxil olunmush ededin faktorialini tapin.

// let num = parseInt(prompt("Faktoryalını hesablamaq istədiyiniz ədədi yazın "));
// let faktorial = 1;

// if (num < 0) {
//     console.log("Mənfi ədədlərin faktoryalı hesablana bilməz:");
// } else if (num === 0) {
//     console.log("0! = 1");
// } else {
//     for (let i = 1; i <= num; i++) {
//         faktorial *= i;
//     }
//     console.log(num + "! =", faktorial);
// }

// ! Task-2 Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.

// let arr = [2, 4, 6, 7, 10, 12, 58, 9];

// let largestIndex = 0;
// let smallestIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[largestIndex]) {
//         largestIndex = i;
//     }
//     if (arr[i] < arr[smallestIndex]) {
//         smallestIndex = i;
//     }
// }

// let temp = arr[largestIndex];
// arr[largestIndex] = arr[smallestIndex];
// arr[smallestIndex] = temp;

// console.log("Böyük ədəd:", arr[smallestIndex], "Balaca ədəd:", arr[largestIndex]);
// console.log("Düzəldimiş ədəd:", arr);


// ! Task-3 Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.

// let arr = [2, 4, 6, 7, 10, 12, 58, 9];

// let largestOdd = null;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         if (largestOdd === null || arr[i] > largestOdd) {
//             largestOdd = arr[i];
//         }
//     }
// }

// if (largestOdd !== null) {
//     console.log("Ən böyük tək ədəd:", largestOdd);
// } else {
//     console.log("Array-də heç bir tək ədəd yoxdur.");
// }


// ! Task-4 Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.

// let num = [3, 5, 7, 1, 9, 32, 95, 32, 97, 42];

// let min = num[0];
// let max = num[0];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] < min) {
//         min = num[i];
//     }
//     if (num[i] > max) {
//         max = num[i];
//     }
// }

// let average = (min + max) / 2;

// console.log("Minimum ədəd:", min);
// console.log("Maksimum ədəd:", max);
// console.log("Minimum və maksimum ədədlərin ədədi ortası:", average);


// ! Task-5 arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function

let num = [3, 5, 7, 1, 9, 32, 95, 32, 97, 42];

let min = num[0]
let max = num[0]

for (let i = 0; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i];
    }
    if (num[i] > max) {
        max = num[i];
    }
}

let sum = 0
for (let i = 0; i < num.length; i++) {
    if (num[i] !== min && num[i] !== max) {
        sum +=num[i]
    }
    
}

console.log("Array-in içində minimum və maksimum nəzərə alınmadan, digər elementlərin cəmi:",sum);