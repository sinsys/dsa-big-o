# Data Structures & Algorithms

## Practice Drills

### Requirements

In these drills, you'll practice determining the big O complexity of algorithms. For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.

### 1. What is the Big O for this?  

  1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

  > 0(1) - The function will only be called once regardless of the input.

  2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

  > O(n) - The function can max out being equivilant to the size of the input array

### 2. Even or odd  

  1. What is the Big O of the following algorithm? Explain your answer

```javascript
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```

  > 0(1) - The function will only be called once regardless of the input

### 3. Are you here?  

  1. What is the Big O of the following algorithm? Explain your answer

```javascript
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

  > O(n^2) - Two nested for loops will increase the complexity exponentially depending on the inputs

### 4. Doubler  

What is the Big O of the following algorithm? Explain your answer

```javascript
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

  > O(n) - The loop will only run one time

### 5. Naive search  

What is the Big O of the following algorithm? Explain your answer

```javascript
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

  > O(n) - The loop will only run one time

### 6. Creating pairs:  

What is the Big O of the following algorithm? Explain your answer

```javascript
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

  > O(n^2) - Two nested for loops will increase the complexity exponentially depending on the inputs

### 7. Compute the sequence  

What does the following algorithm do? What is its runtime complexity? Explain your answer

```javascript
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

  > The algorithm computes fibonacci numbers.
  > O(n) - The loop will only run one time, even though its referencing stashed values from prior runs.

### 8. An efficient search  

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```javascript
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

  > O(log n) - The algorithm halves the input every iteration

### 9. Random element  

What is the Big O of the following algorithm? Explain your answer

```javascript
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

  > O(1) - The algorithm will only be called one single time regardless of the size of the array

### 10. What Am I?  

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```javascript
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

  > It determines if the number is prime or not
  > O(n) - It will only iterate through the array once

### 11. Tower of Hanoi  

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.  

The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: 
  - i) Only one disk may be moved at a time 
  - ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. 
  - iii) A larger disk may not placed on top of a smaller disk  

Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

```javascript
const towerOfHanoi = (height, sourceRod, destinationRod, bufferRod) => {
  
  // Verify that disks exist on the peg
  if (height >= 1) {

    // Move one of the towers to a buffer rod (using destination rod)
    towerOfHanoi(height - 1, sourceRod, bufferRod, destinationRod);

    // Move the remaining disk to the destination peg.
    console.log('Move disk from rod', sourceRod, 'to rod', destinationRod);

    // Move the tower of (height - 1) from the bufferRod to the destinationRod using the sourceRod
    towerOfHanoi(height - 1, bufferRod, destinationRod, sourceRod);
  }
  
  return;
}

// Invocation:
towerOfHanoi(3, "A", "C", "B");
```

  - If you are given 5 disks, how do the rods look like after 7 recursive calls?

```javascript
A -> C // 4 | 0 | 1
A -> B // 3 | 1 | 1
C -> B // 3 | 2 | 0
A -> C // 2 | 2 | 1
B -> A // 3 | 1 | 1
B -> C // 3 | 0 | 2
A -> C // 2 | 0 | 3

|         |    |         |    |         |
|         |    |         |    |         |
|         |    |         |    |_        |
|_ _ _ _  |    |         |    |_ _      |
|_ _ _ _ _|    |         |    |_ _ _    |
[  Rod A  ]    [  Rod B  ]    [  Rod C  ]
```

  - How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

  > 3: 7  
  > 4: 15  
  > 5: 31  

  - What is the runtime of your algorithm?

  > O(2^n) - When the input size is increased the time complexity goes up by a factor of 2.

### 12. Iterative version  

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

  - #### 1. Counting Sheep

  Recursive version:  

  ```javascript
  const countingSheep = (count, array) => {

    let lines = array || [];

    // Base case
    if ( count <= 0 ) {
      lines.push("All sheep jumped over the fence");
      return lines.join('\n');
    };

    // General case
    lines.push(`${count}: Another sheep jumps over the fence.`);
    return countingSheep(--count, lines);
  };
  ```

  Iterative version:  

  ```javascript
  const countingSheep = (count) => {
    let lines = [];
    for (count; count > 0; count--) {
      lines.push(`${count}: Another sheep jumps over the fence.`);
    }
    lines.push("All sheep jumped over the fence");
    return lines.join(`\n`);
  }
  ```

  - #### 2. Power Calculator  

  Recursive version:  

  ```javascript
  const powerCalculator = (int, exp) => {
    // Invalid case
    if ( exp < 0 ) return "exponent should be >= 0"

    // All exponents of 0 return 1
    if ( exp === 0 ) return 1;

    // Base case
    if ( exp === 1 ) return int;

    // General case
    return int * powerCalculator(int, --exp);
  };
  ```

  Iterative version:  

  ```javascript
  const powerCalculator = (int, exp) => {
    if ( exp < 0 ) return "exponent should be >= 0";
    if ( exp === 0 ) return 1;
    if ( exp === 1 ) return int;

    let result = int;
    for (let i = 2; i <= exp; i++) {
      result*=int;
    }

    return result;
  }
  ```  

  - #### 3. Reverse String  
    
  Recursive version:  

  ```javascript
  const reverseString = (string) => {
    if (string === "") return "";
    return reverseString(string.substr(1)) + string.charAt(0);
  }
  ```

  Iterative version:  

  ```javascript
  const reverseString = (string) => {
    let strArr = string.split('');
    let returnStr = '';
    for (let i=strArr.length - 1; i >= 0; i--) {
      returnStr+=strArr[i];
    }
    return returnStr;
  }
  ```  

  - #### 4. nth Triangular Number
    
  Recursive version:  

  ```javascript
  const nthTriangularNumber = (num) => {
    // Invalid case
    if ( num <= 0 ) return console.log("Your number needs to be a positive integer");

    // Base case
    if (num <= 1 ) return num;

    // General case
    return num + nthTriangularNumber(num - 1);
  }
  ```

  Iterative version:  

  ```javascript
  const nthTriangularNumber = (num) => {
    if ( num <= 0 ) return console.log("Your number needs to be a positive integer");

    let resultNum = 0;
    for ( let i = num; i > 0; i--) {
      resultNum += i;
    }
    return resultNum;
  }
  ```  

  - #### 5. String Splitter
    
  Recursive version:  

  ```javascript
  const stringSplit = (string, delimiter, array) => {

    let str = string.trim();
    let words = array || [];
    let index = str.indexOf(delimiter);

    // Base case
    if (index < 0 ) {
      words.push(str);
      return words;
    }

    // General case
    words.push(str.substr(0, index));
    return stringSplit(str.slice(index + 1), delimiter, words);
  }
  ```

  Iterative version:  

  ```javascript
  const nthTriangularNumber = (num) => {
    if ( num <= 0 ) return console.log("Your number needs to be a positive integer");

    let resultNum = 0;
    for ( let i = num; i > 0; i--) {
      resultNum += i;
    }
    return resultNum;
  }
  ```  

  - #### 6. Fibonacci
    
  Recursive version:  

  ```javascript
  const fibonacci = (num, cache) => {

    // Store our prior values to decrease computations
    cache = cache || {};

    // Base case - run until there is a duplicate
    if ( cache[num] ) return cache[num];

    // Handles beginning fibonacci sequence
    if ( num <= 0 ) return 0;
    if ( num === 1 ) return 1;

    // General case
    return cache[num] = 
      fibonacci(num - 1, cache) + 
      fibonacci(num - 2, cache);
  };
  ```

  Iterative version:  

  ```javascript
  const fibonacci = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {

      if (i === 1) {
      result.push(0);
      }
      else if (i === 2) {
      result.push(1);
      }
      else {
      result.push(result[i - 2] + result[i - 3]);
      }

    }
    return result;
  }
  ```  

  - #### 7. Factorial
    
  Recursive version:  

  ```javascript
  const factorial = (num) => {
    // Base case
    if ( num <= 1 ) return num;

    // General case
    return num * factorial(num - 1);
  };
  ```

  Iterative version:  

  ```javascript
  const factorial = (num) => {
    if ( num <= 1 ) return num;

    let result = num;
    for ( let i = num - 1; i > 0; i-- ) {
      result *= i;
    }
    return result;
  }
  ```  

### 13. Recursive Big O  

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

### 14. Iterative Big O  

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.