# The Linear Search is the most basic way to search through a list.
# All the function does is take a value to look for, and then iterate one by one
# Through the whole list checking each value, until it finds
# What it is looking for.

# Below is an example of how to code it in python

# 
def linear_search(value, list):
    for item in list:
        if item == value:
            return list.index(item)
        pass