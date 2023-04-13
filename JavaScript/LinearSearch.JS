/*
 * This is the same Linear Search function as the one in python, it is just going to be in JS for 
 * Practice as well as to show the actual iteration throught the list without the "in" function from python
 */  

function LinearSearch(list, value) {
    for (let index = 0; index < list.length; index++) {
        if (list[index] == value) {
            return `The index for the value is ${index}`;
        }
    }
}

// Big O complexity for space and time is O(n)
// You would use it as such:
// Take a list: let list = [1,2,3,4,5];
// Then plug in the list variable name into the function along with the value you want to find
// console.log(LinearSearch(list, 4)); -> Logs "The index for the value is 3"

// The best case is O(1) which would be if it is the very first index
// A problem with this algorithm 
// Is that even if the value you are searching for is at the end (or not even in the list)
// The algorithm will still have to go all the way through the entire list 
// Just to get there or to figure out that its not there