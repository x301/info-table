export const OnSort = (unsortedArr, col) => {
    console.log(unsortedArr)
    const sortedArr = unsortedArr;
    const a = sortedArr[0];
    const b = sortedArr.length - 1;
    sortedArr.sort((a, b) => {
        if (a[col] > b[col]) {
            return 1;
        }
        if (a[col] < b[col]) {
            return -1;
        }
        return 0;
    })
    return sortedArr
}
