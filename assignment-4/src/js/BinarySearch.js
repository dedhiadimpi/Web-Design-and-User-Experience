/**
 * @function binarySearch - This function searches the required value in given array
 * @param array - This is the array that has to be used for searching
 * @param search - This is the integer that has to be searched
 * @returns {boolean} - This returns true if element present in the list or else returns false
 */
function binarySearch(array,search){
    /**
     *
     * @type {number} - This indicates start index of the array
     */
    let start = 0;
    /**
     *
     * @type {number} - This indicates end index of the array
     */
    let end = array.length-1;
    /**
     * @flow while traverses the array from start to end to search the number
     */
    while(start <= end){
        /**
         *
         * @type {number} - This indicates the mid point of start and end
         */
        let midPoint = Math.round((start+end)/2);
        if(search == array[midPoint]){
            return true;
        }
        else{
            if(search > array[midPoint]){
                start = midPoint + 1;
                continue;
            } else{
                end = midPoint - 1;
                continue;
            }
        }
    }
    return false;
}

/**
 *
 * @type {number[]} - This is the array which has to be searched
 */
let array = [10,30,40,50];
/**
 *
 * @type {number} - This is the integer that has to be searched
 */
let search = 30;
/**
 *
 * @type {boolean} - This stores that boolean indicating whether search is found or not
 */
let searchResult = binarySearch(array, search);
if(searchResult == true){
    console.log("Number "+search+" found in the list");
}else{
    console.log("Number "+search+" not found in the list");
}