
let arrayElemt=[1, 2, 3, 4]

let maxNumber = arrayElemt.reduce((prevValue,currentIndex, currentValue)=> {
    return prevValue < currentValue
})