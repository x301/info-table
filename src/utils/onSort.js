export const OnSort = (unsortedArr, col, sortType) => {
    const sortedArr = unsortedArr.concat();
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
    if (sortType === "asc") {
        return sortedArr
    } else if (sortType === "desc") {
        return sortedArr.reverse()
    }

}
