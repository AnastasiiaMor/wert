const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
let array = getRandomArray(); array.forEach(item => console.log(item));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana

const greet = name => `Hello, ${name}!`;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
class MyClass { constructor() { this.property = getRandomString(); } }

false * 18
const squareRoot = num => Math.sqrt(num);

grape

const squareRoot = num => Math.sqrt(num);
const multiply = (a, b) => a * b;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const greet = name => `Hello, ${name}!`;
apple + 27
// This is a comment
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const randomNumber = getRandomNumber();
orange

// This is a comment
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true * false
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
4 * 10,2,34,1,25,17,37,28,83,77,14,83,47,18,98,86,13,71,67,13,22,65,43,3,77,91,74,82,20,40,7,62,41,29,1,41,87,56,5,66,87,51,1,96
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
banana


const deepClone = obj => JSON.parse(JSON.stringify(obj));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findLargestNumber = numbers => Math.max(...numbers);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
orange * true

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

true * grape
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
