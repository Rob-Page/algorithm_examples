//list of random numbers
let random_numbers = [85,52,59,60,47,64,47,48,96,76,1,75,72,68,36,21,1,12,95,74,97,29,53,29,42,4,61,45,77,52,3,80,74,35,41,83,65,19,82,85,41,28,14,81,65,29,33,21,71,19,32,31,21,48,79,33,63,72,65,78,36,93,75,50,93,28,91,64,93,32,75,23,4,34,66,8,95,40,21,90,38,26,40,92,31,44,82,15,35,6,51,57,15,92,46,19,13,30,62,12];
// function to return a sorted list

/*******************************************************************************
 * INSERTION SORT
 * VARIABLES
    * key: the variable that tracks the current value being moved down the array
        * to its sorted location
    * i: the iterator for the number we are comparing the key to, in the primary
        * position (lower down the array)
    * j: the iterator that tracks our progress through the array
 * WHAT IT DOES: This function takes in a list, sorts it by numerical value and 
 * returns the sorted list
 * HOW IT DOES IT: Using a for loop to walk down the array we compare each
 * value to the value in the previous index. If that value is greater than the
 * key we switch the two values and start the comparison over again with the 
 * new previous value. This happens until the key is located in its sorted 
 * location(the previous index's value is not greater) by doing this with
 * each value in the array in an increasing order we can be sure the array 
 * is sorted correctly.
*******************************************************************************/
const insertion_sort = (list) =>{
// declare variables to be used in order to avoid constant redeclaration
let key;
let i;
    for (let j = 1; j < list.length; j++) {
        // declare key (we start at the second index because we are garunteed to compare with the value immediatly previous)
        key = list[j];
        // the counter for the while loop starts as a representation of the index previous the key value index
        i = j-1; 
        // While loop that will bounce the number down the chain until it gets to its sorted position
            // CONDITION: The iterator must be no smaller than 0 (out of range) AND the number in the primary position must be greater than the key(secondary position)
        while (i >= 0 && list[i] > key) {
            // puts primary number in secondary placement
            list[i + 1] = list[i];
            // set new primary number to one index lower
            i = i-1;
            // set previous secondary number(key) to the previous primary position
            list[i + 1] = key;
        }
    }
    return list;
}
// call function to sort list
let sorted_list = insertion_sort(random_numbers);
console.log(sorted_list);