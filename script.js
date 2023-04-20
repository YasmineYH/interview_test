//ONE
let body = document.body
let elements = body.getElementsByTagName('*')
let elementsArray = Object.values(elements)

let tagArray = []

function checkTag(tag) {
    for (i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].localName == tag) {
            tagArray.push(elementsArray[i])
        }
    }

    return tagArray
}


console.log('Check Tag: ', checkTag('h1'))

console.log('Array', elementsArray)





//CHALLENGE TWO
let multiDimensionalArray = [
    [1, 2],
    ['car'],
    [3, 4, 5],
    [6, 7]
]

let flattenedArray = [].concat.apply([], multiDimensionalArray);

//Number of integers in the flattened array
let integersCount = 0

//New array containing only the integers in the original array
let newIntegerArray = []


//Looping through flattened array to count number of integers, and adding them to the new integer array
for (i = 0; i < flattenedArray.length; i++) {
    if (typeof(flattenedArray[i]) == 'number') {
        integersCount++
        newIntegerArray.push(flattenedArray[i])
    }
}

console.log('No of integers: ', integersCount)
console.log('New integer array: ', newIntegerArray)