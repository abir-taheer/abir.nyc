export default function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const indexToSwap = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[indexToSwap];
    arr[indexToSwap] = temp;
  }
  return arr;
}
