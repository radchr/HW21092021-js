// 5) задан массив ['a', 'b', 'c', 'd']
//    получить массив ['ab', 'bc', 'cd', 'da']

const arr88 = ['a', 'b', 'c', 'd']
console.log('задача 5 начало', arr88)

const arr99 = []

for (let elem = 0; elem < arr88.length - 1  ; elem++) {
    arr99[elem] = `${arr88[elem]}${arr88[elem+1]}`
}
arr99[arr88.length - 1] = `${arr88[arr88.length-1]}${arr88[0]}`

console.log('задача 5 решение', arr99)