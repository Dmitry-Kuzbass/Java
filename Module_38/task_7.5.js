
function getUniqueSortedNumbers(arr) {
    const uniqueArr = [...new Set(arr)];
    
        uniqueArr.sort((a, b) => a - b);
    
        return uniqueArr;
}

const numbers = [1, 5, 4, 12, 0, 10, 10, 1, 13, 5];
const result = getUniqueSortedNumbers(numbers);

console.log(result); // В консоли вы увидите: [1, 2, 5, 8, 9]
