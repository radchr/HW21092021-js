// 6) задан массив ['a', 'b', 'c', 'd']
//    получить массив [25, 16, 9, 4];


// задача 6......
const arrStart6ex = ['a', 'b', 'c', 'd'];

console.log("задача 6 - начало",arrStart6ex)

for (let i = 0; i < arrStart6ex.length; i++) {
  arrStart6ex[i] = ((arrStart6ex.length + 1) - i)**2
}

console.log("задача 6 решение", arrStart6ex)
