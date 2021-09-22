// задан массив ['a', 'b', 'a', 'b']
//    без дополнительных переменных и дополнительных массивов изменить заданный массив так, чтобы она был ['b', 'a', 'b', 'a']

const arrStert3ex = ['a', 'b', 'a', 'b']
console.log('задача 3 начало', arrStert3ex)

for (let i = 0; i < arrStert3ex.length; i++) {
    arrStert3ex[i] = arrStert3ex[i+1]
}

arrStert3ex[arrStert3ex.length - 1] = arrStert3ex[arrStert3ex.length - 3]

console.log('задача 3 решение',arrStert3ex)

