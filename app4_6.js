// 4) задан массив ['a', 'b', 'c', 'd']
//    получить массив ['a1', 'b2', 'c3', 'd4']

const arr44 = ['a', 'b', 'c', 'd']
console.log('задача 4 начало',arr44)
const arr55 = []


for (let elem = 0; elem < arr44.length; elem++){
    arr55[elem] = `${arr44[elem]}${elem+1}`

}

console.log('задача 4 решение',arr55)