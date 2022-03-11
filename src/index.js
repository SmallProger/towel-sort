// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (arguments.length == 0) return [];
    if (matrix.length == 0) return [];
    matrix.forEach((arr, index) => {
        if ((index + 1) % 2 == 0 && index != 0) {
            arr = arr.reverse();
        }

        result = result.concat(arr);
    });
    return result;
};
