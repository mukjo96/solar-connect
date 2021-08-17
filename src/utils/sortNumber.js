function partition(array, left, right, pivotIndex, isDescending) {
    let swap;
    let pivot = array[pivotIndex];
    while (left <= right) {
        if (isDescending) {
            while (array[left] > pivot) left++;
            while (array[right] < pivot) right--;
        } else {
            while (array[left] < pivot) left++;
            while (array[right] > pivot) right--;
        }
        if (left <= right) {
            swap = array[left];
            array[left] = array[right];
            array[right] = swap;
            left++;
            right--;
        }
    }
    swap = array[left];
    array[left] = array[pivotIndex];
    array[pivotIndex] = swap;
    return left;
}

function recursionSort(array, left, right, isDescending) {
    let pivotIndex = right;

    pivotIndex = partition(array, left, right - 1, pivotIndex, isDescending);

    if (left < pivotIndex - 1) {
        recursionSort(array, left, pivotIndex - 1, isDescending);
    }
    if (pivotIndex + 1 < right) {
        recursionSort(array, pivotIndex + 1, right, isDescending);
    }
    return array;
}

export default function numberSort(array, isDescending = false) {
    const left = 0;
    const right = array.length - 1;

    return recursionSort(array, left, right, isDescending);
}
