# The Binary Search is a much faster way of searching through an array.
# It searches by going to a halfway point checking for value, then halving the array.
# It then will go to the left or right, depending of if it was less than or greater than the value.
# The same way as you might flip through a dictionary to find a word.
# The one downside is that it MUST be a sorted array. It has a O(log n) time and space complexity.

def binary_search(array, value):
    # Getting the first and last position of the array
    first = 0
    last = len(array) - 1
    # A loop to keep running until it checks all possible positions; breaks when found
    while first <= last:
        # add the first and last then floor divide so that it does not have a float
        mid = (first + last) // 2
        # Always looking at the middle value of the current range
        if array[mid] == value:
            return f"Value is at index {mid}"
        # Checking if it is to the left of the value
        elif array[mid] < value:
            # Changes the beginning of the range one to the right of the mid; cuts array in half
            first = mid + 1
        # Checking if it is to the right of the value
        elif array[mid] > value:
            # Changes the end of the range one to the left of the mid; cuts array in half
            last = mid - 1
        # Returns this if the value is not in the array
        else:
            return "Value is not in the array"


# Below is a array you could to use to see the output:
practice_array = [23, 33, 45, 62, 76, 88, 90, 94]
print(binary_search(practice_array, 90))