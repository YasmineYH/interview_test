//ONE
let body = document.body

//Get all elements in document body by tag name
let elements = body.getElementsByTagName('*')
let elementsArray = Object.values(elements)

//Function to search for a tag with a specific value
function checkTag(tag, value) {
    let tagArray = []

    for (i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].localName == tag && elementsArray[i].innerHTML == value) {
            tagArray.push(elementsArray[i])
        }
    }

    if (tagArray.length == 0) {
        return false
    } else return true
}

//Testing 
console.log('Check h1 Tag with value "HELLO WORLD": ', checkTag('h1', 'HELLO WORLD'))
console.log('Check h1 Tag with value "Hello": ', checkTag('h1', 'Hello'))






//CHALLENGE TWO
let multiDimensionalArray = [
    [1, 2],
    ['car'],
    [3, 4, 5],
    [6, 7, 8]
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

//Testing
console.log('No of integers: ', integersCount)
console.log('New integer array: ', newIntegerArray)