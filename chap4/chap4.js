// Global ids
let arrayValue = [1, 2, 3, 4, 5];

let writeSpace1 = document.getElementById('ex1');
let writeSpace2 = document.getElementById('ex2');
let writeSpace3 = document.getElementById('ex3');
let writeSpace4 = document.getElementById('ex4');
//let writeSpace5 = document.getElementById('ex5');


//working part

function rangeX(start, end, step = 1) {
  let nums = [];
  for (i = start ; i <= end ; i += step) {
    if (i <= end && i !== 11)
    {
      nums.push(i);
    }
  }
  return nums.toString();

}

function sumX(list) {
  let total = 0;
  for (let i in list) {
    total += Number(list[i]);
  }
  return String(total);
}

function reverseArray(list) {
  let backAss = [];
  for (i = list.length - 1 ; i >= 0 ; i -= 1) {
    backAss.push(list[i]);
  }
  return backAss.toString();
}

function reverseArrayInPlace(list) {
  let end = list.length - 1;
  let start = 0;
  while (end > start) {
    let shelf = list[end];
    list[end] = list[start];
    list[start] = shelf;
    end -= 1;
    start += 1;
  }
  return list;
}

// Output 
writeSpace1.textContent += rangeX(1,21,2);
console.log(rangeX(1,10));

writeSpace2.textContent += sumX(rangeX(10,56,4));
console.log(sumX(rangeX(10,56,4)));

writeSpace3.textContent += reverseArray(["A","B","C","D","E"]);
console.log(reverseArray(["A", "B", "C"]));

writeSpace4.textContent += reverseArrayInPlace(arrayValue);
arrayValue = [1, 2, 3, 4, 5]; // reset HTML operation for console
console.log(reverseArrayInPlace(arrayValue));
