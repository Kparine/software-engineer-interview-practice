# 1 Dimensional Maze

Given an array that contains numbers, find if there is a way to escape by only moving up to the amount of spaces in the current index.

The starting index is 0

Example 1:
[1,1,1] -> true

Beginning at index 0, since the value is 1, there is only move that can be made to the right. Then moves can be made all the way pass the end of the index


Example 2:
[1,0,1] -> false

Beginning at index 0, there is only 1 way to move to the right, but since index 1 is 0, there are no moves to the right that can be made


Example 3:
[2,1,1] -> true

Beginning at index 0, there are 2 moves that can be made, to index 1, and index 2, from there, the array can be exited.