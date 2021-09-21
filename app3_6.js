// задан массив ['a', 'b', 'a', 'b']
//    без дополнительных переменных и дополнительных массивов изменить заданный массив так, чтобы она был ['b', 'a', 'b', 'a']

const arr33 = ['a', 'b', 'a', 'b']
console.log('задача 3 начало', arr33)

for (let elem = 0; elem < arr33.length; elem++) {
    arr33[elem] = arr33[elem+1]
}

arr33[arr33.length - 1] = arr33[arr33.length - 3]

console.log('задача 3 решение',arr33)

