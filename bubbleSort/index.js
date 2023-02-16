/* Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The algorithm passes through the list repeatedly until the list is sorted.

Here's the general algorithm for bubble sort:

- Start at the beginning of the list.
- Compare the first two elements. If the first is greater than the second, swap them.
- Move to the next pair of elements, and repeat step 2, continuing until the end of the list.
- Repeat steps 1-3 until no swaps are made during an entire pass through the list.*/

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap elements
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  
  // Example:
  const arr = [3, 5, 2, 8, 4];
  const sortedArr = bubbleSort(arr);
  console.log("bubbleSort =>", sortedArr); // output: [2, 3, 4, 5, 8]
  

/* The function takes an array (arr) as an argument, and uses a do...while loop to repeatedly iterate through the array, swapping adjacent elements that are in the wrong order. The swapped variable keeps track of whether any swaps were made during a pass through the array, and the loop continues until no swaps are made during an entire pass through the array. Finally, the function returns the sorted array.

Note that bubble sort has a worst-case and average time complexity of O(n^2), where n is the number of elements in the array. Therefore, it is not recommended for large arrays or performance-critical applications.*/