/**
 * @function reverseString - Reverses the string
 * @param str - This is sting that has to be reversed
 * @returns {string} - This is reversed string
 */
function reverseString(str){
    /**
     *
     * @type {string} - This stores reversed string
     */
    let reverseStr = "";
    /**
     * @flow for traverses the string from end point and reverses the string
     */
    for(let i=str.length-1; i>=0; i--)
    {
        reverseStr = reverseStr+str[i];
    }
    return reverseStr;
}

/**
 *
 * @type {string} - This stores string that has to be reversed
 */
let str = "Dimpi";
/**
 *
 * @type {string} - This stores reversed string after function call
 */
let reverseStr = reverseString(str);
console.log("String: "+str);
console.log("Reversed String: "+reverseStr);