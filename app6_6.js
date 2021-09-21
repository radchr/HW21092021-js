// 6) задан массив ['a', 'b', 'c', 'd']
//    получить массив [25, 16, 9, 4];


// задача 6......
const arr61 = ['a', 'b', 'c', 'd'];

console.log("задача 6 - начало",arr61)

for (let elem = 0; elem < arr61.length; elem++) {
  arr61[elem] = ((arr61.length + 1) - elem)**2
}

console.log("задача 6 решение", arr61)
