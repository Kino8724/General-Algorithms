# The Linear Search is the most basic way to search through a list.
# All the function does is take a value to look for, and then iterate one by one
# Through the whole list checking each value, until it finds
# What it is looking for.

# Below is an example of how to code it in python

def linear_search(list, value):
    for item in list:
        if item == value:
            return f"The index of the value is {list.index(item)}"
    
# The way you would use this is as such:
# Take a list: list = [1,2,3,4,5]
# Then plug in the list variable name into the function along with the value you want to find
# print(linear_search(list, 4)) -> prints "The index of the number is 3" to the console

# This is has a BigO notation of O(n) for both space and time
# The best case is O(1) which would be if it is the very first index
# A problem with this algorithm 
# Is that even if the value you are searching for is at the end (or not even in the list)
# The algorithm will still have to go all the way through the entire list 
# Just to get there or to figure out that its not there
