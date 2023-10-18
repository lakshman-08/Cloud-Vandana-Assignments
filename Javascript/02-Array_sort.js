
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  
  function getUserInputAndSort() {
    const inputArray = [];
    const numElements = parseInt(prompt("Enter the number of elements in the array:"));
  
    for (let i = 0; i < numElements; i++) {
      const value = parseFloat(prompt(`Enter element ${i + 1}:`));
      inputArray.push(value);
    }
    
    const sortedArray = sortArrayDescending(inputArray);
    
    console.log("Sorted Array in Descending Order:", sortedArray);
  }
  getUserInputAndSort();
  