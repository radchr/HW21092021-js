// Домашка на четверг 23-09-2021* :

// 1) задан массив ['a', 'b', 'c', 'd']
//    без дополнительных переменных получить массив ['d', 'a', 'd', 'a']

const arr1 = ['a', 'b', 'c', 'd'];

console.log("задача 1 начало", arr1)

const arr2 =[];

for (let elem = 0; elem < arr1.length; elem++) {
  elem%2 === 0 ? arr2[elem] = arr1[arr1.length - 1] : arr2[elem] = arr1[0]
}

console.log("задача 1 решение",arr2)