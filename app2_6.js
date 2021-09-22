// Домашка на четверг 23-09-2021* :
// 2) задан массив ['a', 'b', 'c', 'd']
//    получить массив ['d', 'c', 'b', 'a']


const arrStart2ex = ['a', 'b', 'c', 'd'];

console.log("задача 2 начало",arrStart2ex)

const arrEnd2ex =[];

for (let i = 0; i < arrStart2ex.length; i++){
  arrEnd2ex[i] = arrStart2ex[arrStart2ex.length - 1 - i ] 
}

console.log("задача 2 решение", arrEnd2ex)