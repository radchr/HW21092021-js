// Домашка на четверг 23-09-2021* :
// 2) задан массив ['a', 'b', 'c', 'd']
//    получить массив ['d', 'c', 'b', 'a']


const arr11 = ['a', 'b', 'c', 'd'];

console.log("задача 2 начало",arr11)

const arr22 =[];

for (let elem = 0; elem < arr11.length; elem++){
  arr22[elem] = arr11[arr11.length - 1 - elem ] 
}

console.log("задача 2 решение", arr22)