const arr = [ 3, 5, 100, 1, 2, 12321, 7, 1, 3213, 12312, 13, 31241]
// bubble sort
const bubbleSort = (unsortedArr) => {
  const arr = [...unsortedArr]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j-1], arr[j]]
      }
    }
  }
  return arr
}
/* console.log('Bubble Sort', bubbleSort(arr)) */
  
// selection sort

const selectionSort = (unsortedArr) => {
  const arr = [...unsortedArr]
  for (let i = 0; i < arr.length - 1; i++) {
  	let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
    	if (arr[j] < arr[minIndex]) {
      	minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
/* console.log('Selection Sort', selectionSort(arr)) */
  


// insertion sort

const insertionSort = (unsortedArr) => {
  const arr = [...unsortedArr]
  for (let i = 1; i < arr.length; i++) {
  	for (let j = i; j > 0; j--) {
    	if (arr[j] < arr[j-1]) {
      	[arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      }
    }
  }
  return arr
}
/* console.log('Insertion Sort', insertionSort(arr)) */


// quick sort

const quickSort = (arr) => {
  if (arr.length === 1) return arr
  
  let pivot = arr[0]
  const leftArr = []
  const rightArr = []
  
  for (let i = 1; i < arr.length; i++) {
  	arr[i] > pivot ? rightArr.push(arr[i]) : leftArr.push(arr[i])
  }
  
  if (leftArr.length > 0 && rightArr.length > 0) {
  	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
  } else if (rightArr.length > 0) {
  	return [pivot, ...quickSort(rightArr)]
  } else {
  	return [...quickSort(leftArr), pivot]
  }
}
/* console.log('Quick Sort', quickSort(arr)) */

//merge sort

const mergeSort = (arr) => {
  if (arr.length === 1) return arr
  let middleIndex = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middleIndex)
  const rightArr = arr.slice(middleIndex)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}
const merge = (leftArr, rightArr) => {
	const mergedArr = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
  	if (leftArr[leftIndex] < rightArr[rightIndex]) {
    	mergedArr.push(leftArr[leftIndex])
      leftIndex++
    } else {
    	mergedArr.push(rightArr[rightIndex])
      rightIndex++
    }
  }
  return [...mergedArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

console.log('Merge Sort', mergeSort(arr))














