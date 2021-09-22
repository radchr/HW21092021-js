// Домашка на четверг 23-09-2021* :

// 1) задан массив ['a', 'b', 'c', 'd']
//    без дополнительных переменных получить массив ['d', 'a', 'd', 'a']

const arrStrart1ex = ['a', 'b', 'c', 'd'];

console.log("задача 1 начало", arrStrart1ex)

const arrEnd1ex =[];

for (let i = 0; i < arrStrart1ex.length; i++) {
  i%2 === 0 ? arrEnd1ex[i] = arrStrart1ex[arrStrart1ex.length - 1] : arrEnd1ex[i] = arrStrart1ex[0]
}

console.log("задача 1 решение",arrEnd1ex)