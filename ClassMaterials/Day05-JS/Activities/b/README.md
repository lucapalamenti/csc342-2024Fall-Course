# Activity D05.b: Array Methods

In this activity you will practice using many of the JavaScript array methods.

## Activity Resources

1. [Array Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) documentation on MDN
2. Assets
   * [JavaScript Starter](files/arrays.js)

## Task 1: Functional Array Iteration

For this task you will use the array's `forEach()` method to iterate over an array and print the values to the console using string interpolation.


### Task 1 Steps

1. Create an new folder in your repository's Scratch Pad under today's folder for this activity.
2. Download the JavaScript starter file from the resources above and place it in the new folder.
3. Create a function called `printArray()` that takes an array as a parameter.
4. Implement code in this function that uses the `forEach()` method to iterate over the array and for each value prints a string that looks as follows: `The value at position 0 is 1`, where the first number is the index and the second number is the value. Make sure not to use string concatenation.
5. Call the `printArray()` function with the provided array and verify that the values are printed to the console as expected by running the script from a terminal using `$ node arrays.js`.

## Task 2: Operating on Array Elements

You will now use the array's `map()` method to create a new array with the square of each value from the provided array.

### Task 2 Steps

1. Implement an arrow function called `squareArray()` that takes an array as a parameter.
2. Implement code in this function that uses the `map()` method to create and return a new array with the square of each value from the provided array.
3. Call the `squareArray()` function with the provided array and verify that the new array is printed to the console as expected by running the script from a terminal using `$ node arrays.js`.

## Task 3: Filtering Array Elements

You will now use the array's `filter()` method to create a new array with only the even values from the provided array.

### Task 3 Steps

1. Implement a function called `filterArray()` that takes an array as a parameter.
2. Implement code in this function that uses the `filter()` method to create and return a new array with only the even values from the provided array.
3. Call the `filterArray()` function with the provided array and verify that the new array is printed to the console as expected by running the script from a terminal using `$ node arrays.js`.

## Task 4: Reducing Arrays

You will now use the array's `reduce()` method to calculate the sum of all values in the provided array.

### Task 4 Steps

1. Implement an arrow function called `sumArray()` that takes an array as a parameter.
2. Implement code in this function that uses the `reduce()` method to calculate and return the sum of all values in the provided array.
3. Call the `sumArray()` function with the provided array and verify that the sum is printed to the console as expected by running the script from a terminal using `$ node arrays.js`.

## Task 5: Chaining Array Methods

You will now chain the array methods `map()`, `filter()`, and `reduce()` to create a new array with the square of the even values and then calculate the sum of these squared values.

### Task 5 Steps

1. Implement a function called `chainArray()` that takes an array as a parameter.
2. Implement code in this function that chains the `map()`, `filter()`, and `reduce()` methods to create a new array with the square of the even values and then calculate and return the sum of these squared values. Do not call any of the previous functions you created for this task, but the code you write here will be very similar to what you already wrote to create those functions.
3. Call the `chainArray()` function with the provided array and verify that the sum is printed to the console as expected by running the script from a terminal using `$ node arrays.js`.

## Task 6: Bonus

If you have time, experiment with other array methods such as `includes()`, `find()`, `findIndex()`, `some()`, and `every()`.
