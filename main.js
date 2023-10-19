const arr = [10, 100, 3, 4, 5,]
const find =  (arr) => {
    let max = arr[0]
    let min  = arr[0]
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

