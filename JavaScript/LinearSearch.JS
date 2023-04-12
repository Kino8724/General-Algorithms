/*
 * This is the same Linear Search function as the one in python, it is just going to be in JS for 
 * Practice as well as to show the actual iteration throught the list without the "in" function from python
 */  

function LinearSearch(list, value) {
    for (let index = 0; index < list.length; index++) {
        if (list[index] == value) {
            return `The index for the value is ${list[index]}`;
        }
    }
}

// Big O complexity for space and time is O(n)
// Will add example use later