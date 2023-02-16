/* Sequential search, also known as linear search, is a simple search algorithm that checks each element in a list one by one until the target element is found or the end of the list is reached.

Here's the general algorithm for sequential search:

- Start at the beginning of the list.
- Compare the target value with the current element in the list.
- If the current element matches the target value, return its index.
- If the current element does not match the target value, move on to the next element.
If the end of the list is reached and the target value has not been found, return -1 to indicate that the value is not in the list.*/


function sequentialSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  // Example:

  const myArray = [4, 2, 6, 8, 1];
  const target = 8;
  console.log("sequentialSearch =>", sequentialSearch(myArray, target));
  
  /* In this example, the sequentialSearch function takes an array (arr) and a target value (target) as arguments, and uses a for loop to iterate through each element in the array. Inside the loop, it checks if the current element matches the target value, and if so, returns the index of the current element. If the end of the loop is reached without finding the target value, the function returns -1 to indicate that the value is not in the array.*/