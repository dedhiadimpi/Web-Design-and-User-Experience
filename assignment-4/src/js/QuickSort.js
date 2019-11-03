/**
 * @desc - Reference link used : https://www.guru99.com/quicksort-in-javascript.html
 */
/**
 * @function swap - This function will swap two values
 * @param array - This is the array in which elements are to be swap
 * @param index1 - This is the first element that has to be swap
 * @param index2 - This is the second element that has to be swap
 */
function swap(array, index1, index2){
    /**
     *
     * @type {number} - This is a temporary variable to store the value of first number
     */
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

/**
 * @function partition - This function sorts element less than pivot to left and greater than pivot to right
 * @param array - This is the array that has to be sorted
 * @param leftPointer - The start point from where sorting has to be performed
 * @param rightPointer - The end point till where sorting has to be performed
 * @returns {number} - This is the partition point
 */
function partition(array, leftPointer, rightPointer){
    /**
     *
     * @type {number} - This is the pivot point which is referred for sorting - Midpoint of start and end
     */
    let pivot = Math.floor((leftPointer+rightPointer)/2);
    let i = leftPointer;
    let j = rightPointer;
    /**
     * @flow while - iterate till start and end points merge
     */
    while(i <= j){
        /**
         * @flow while - loop till left side has number greater than pivot
         */
        while(array[i] < array[pivot]){
            i++;
        }
        /**
         * @flow while - loop till right side has number less than pivot
         */
        while(array[pivot] < array[j]){
            j--;
        }
        /**
         * @flow if - swap the number which is greater on left side with the number which is smaller on right side
         */
        if(i <= j){
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

/**
 * @function quickSort - This is a recursive function that sorts the array using divide and conquer method with complexity O(nlogn).
 * @param array - Array that has to be stored
 * @param leftPointer - Start point of sorting
 * @param rightPointer - End point of sorting
 * @returns {number[]} - This returns sorted array
 */
function quickSort(array, leftPointer, rightPointer){
    /**
     *
     * @type {number} - This is the index where array has been divided
     */
    let index = partition(array, leftPointer, rightPointer);
    if(array.length > 1){
         index = partition(array, leftPointer, rightPointer);
        /**
         * @flow if - Sorting the Left side after partition
         */
        if(leftPointer < index - 1){
            quickSort(array, leftPointer, index - 1);
        }
        /**
         * @flow if - Sorting the right side after partition
         */
        if(index < rightPointer){
            quickSort(array, index, rightPointer);
        }
    }
    return array;
}

/**
 *
 * @type {number[]} - Array to be sorted
 */
let array = [90,80,26,28,100];
/**
 *
 * @type {number[]} - This stores the sorted array
 */
let sortedArray = quickSort(array,0,array.length - 1);
console.log("Sorted Array: ["+sortedArray+"]");