// 5) задан массив ['a', 'b', 'c', 'd']
//    получить массив ['ab', 'bc', 'cd', 'da']

const arrStert5ex = ['a', 'b', 'c', 'd']
console.log('задача 5 начало', arrStert5ex)

const arrEnd5ex = []

for (let i = 0; i < arrStert5ex.length - 1  ; i++) {
    arrEnd5ex[i] = `${arrStert5ex[i]}${arrStert5ex[i+1]}`
}
arrEnd5ex[arrStert5ex.length - 1] = `${arrStert5ex[arrStert5ex.length-1]}${arrStert5ex[0]}`

console.log('задача 5 решение', arrEnd5ex)