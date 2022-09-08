const array1 = [1000, 313, 1000, 313, 234, 1000];

function sort(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    const matchIndex = unique.indexOf(arr[i]);
    if (matchIndex === -1) {
      unique.push(arr[i]);
    }
  }

  const sortedArray = unique.sort((a, b) => {
    return b - a;
  });
  return sortedArray[1];
}

console.log(sort(array1));
