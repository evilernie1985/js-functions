// sumArray(arr)

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//cycle thruough array
//add each element to the next

arr = [1, 2, 3, 4]

function sumArray() {
  var sum = 0;
  for (var i=0; i<arr.length;i++) {
    sum += arr[i]
  }
  console.log(sum);
}

sumArray()

function multiplyArray() {
  var product = 1
  for (j=0;j<arr.length;j++) {
    product *= arr[j]

  }
  console.log(product)
}

multiplyArray()
