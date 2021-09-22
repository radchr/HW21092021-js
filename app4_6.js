// 4) задан массив ['a', 'b', 'c', 'd']
//    получить массив ['a1', 'b2', 'c3', 'd4']

const arrStrart4ex = ['a', 'b', 'c', 'd']
console.log('задача 4 начало',arrStrart4ex)
const arrEnd4ex = []


for (let i = 0; i < arrStrart4ex.length; i++){
    arrEnd4ex[i] = `${arrStrart4ex[i]}${i+1}`

}

console.log('задача 4 решение',arrEnd4ex)