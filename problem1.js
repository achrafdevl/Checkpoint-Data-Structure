function findSumOfDistinctElements(set1, set2) {
  // Merge the sets into a single array
  const mergedArray = set1.concat(set2);

  // Create an object to keep track of distinct elements
  const distinctElements = {};

  // Calculate the sum of distinct elements and store them in the object
  let sum = 0;
  for (let i = 0; i < mergedArray.length; i++) {
    if (!distinctElements.hasOwnProperty(mergedArray[i])) {
      distinctElements[mergedArray[i]] = true;
      sum += mergedArray[i];
    }
  }

  return sum;
}

// Example usage:
const set1 = [5, 2, 8, 4, 6];
const set2 = [3, 9, 2, 6, 1];
const output = findSumOfDistinctElements(set1, set2);
console.log(output); // Output: 38
