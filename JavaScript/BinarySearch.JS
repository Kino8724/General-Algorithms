// The Binary Search is a much faster way of searching through an array.
// It searches by going to a halfway point checking for value, then halving the array.
// It then will go to the left or right, depending of if it was less than or greater than the value.
// The same way as you might flip through a dictionary to find a word.
// The one downside is that it MUST be a sorted array. It has a O(log n) time and space complexity.

function binarySearch(list, value) {
    // Get the first and last position of list
    var first = 0;
    var last = list.length - 1;
    // A loop to keep running until it checks all possible positions; breaks when found
    while (first <= last) {
        // add the first and last, then floor divide, so that it will go to the left if there is a float
        var mid = Math.floor((first + last) / 2);
        // Always looking at the middle value of the current range
        // Checks if the value is in the midle of your range
        if (list[mid] == value) {
            return `value is at index ${mid}`;
        }
        // Checks if the value is to the left of the value and shortening the range
        else if (list[mid] < value) {
            // Cuts array in half
            first = mid + 1;
        }
        // Checks if the value is to the right of the value and shortening the range
        else if (list[mid] > value){
            // Cuts array in half
            last = mid - 1;
        }
        else{
            return "The value is not in the array";
        }
    }
}

// This is an array you can use to test the algorithm
var practice_array = [23, 33, 45, 62, 76, 88, 90, 94];
console.log(binarySearch(practice_array, 33));