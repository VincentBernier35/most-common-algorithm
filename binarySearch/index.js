/*Binary search algorithm, also called dichotomous search, is a search algorithm to quickly find an item in a sorted list.
The basic idea of this algorithm is to split the list in two at each step of the search, comparing the searched element with the element in the middle of the list.
If the element searched is less than the element in the middle, only the first half of the list is kept, otherwise only the second half is kept.
We then repeat the operation on the chosen half until the element sought is found or the list contains only one element.*/

function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length -1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const middleElement = array[middleIndex];


        if (middleElement === target) {
            return middleIndex;
        } else if (middleElement < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return "not found";
 }

 // Example: 

 const myArray1 = [1, 2, 4, 6, 8, 56, 58, 78, 359];
 const target1 = 56;

 console.log("binarySearch1 =>", binarySearch(myArray1, target1));


// *********************** 2nd example **********************


/* This algorithm below takes as input a sorted list and an item item to search for. The variable low is initialized to zero, the variable high is initialized to the length of the list minus one. We then enter a while loop as long as low is less than or equal to high.

In the loop, we calculate the median value of the list by taking the whole index of the middle of the list with the formula Math.floor((low + high) / 2). We then retrieve the corresponding element with let guess = list[mid];.

If guess is equal to item, we have found the element sought and we return the corresponding index with return mid;.

If guess is greater than item, it means that the searched item is in the first half of the list, so we reduce the search range by changing the high variable to mid - 1.

If guess is less than item, it means that the searched item is in the second half of the list, so we reduce the search range by changing the low variable to mid + 1.

If we exit the while loop without having found the element sought, we return null.*/


function binarySearchExample2(list, item) {
    let low = 0;
    let high = list.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let guess = list[mid];
  
      if (guess === item) {
        return mid;
      }
  
      if (guess > item) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return "not found";
  }
  


  const myList = [1, 3, 5, 7, 9, 12, 35, 56, 98, 104];

  console.log("binarySearchExample2 =>", binarySearchExample2(myList, 7));
  console.log("binarySearchExample2 =>", binarySearchExample2(myList, -10));