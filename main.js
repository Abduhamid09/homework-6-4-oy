const arr = [10, 100, 3, 4, 5,]
const find = (arr) => {
    let max = arr[0]
    let min = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index]
        } else if (arr[index] < min) {
            min = arr[index]

        }
    }
    return {
        max: max,
        min: min
    }
}
console.log(find(arr))


function fn(...params) {
    target = 'user'
    for (let i = 0; i < params.length; i++) {
        if (params[i] == target) {
            console.log('ism bor');
        }
    }
}
fn('abduhamid', 'abd' , 'user' )


let arr1 = [-1, 0, 2, 7]
let arr2 = []
for (let index = 0; index < arr1    .length; index++) {
    if (arr[index] > 0) {
        arr2.push(arr[index])
    }
}
console.log(arr2)
