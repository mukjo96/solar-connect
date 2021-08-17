function partition(arr, left, right, pivotIndex, isDescending) {
    let swap;
    let pivot = arr[pivotIndex];
    while (left <= right) {
        if (isDescending) {
            while (arr[left] > pivot) left++;
            while (arr[right] < pivot) right--;
        } else {
            while (arr[left] < pivot) left++;
            while (arr[right] > pivot) right--;
        }
        if (left <= right) {
            swap = arr[left];
            arr[left] = arr[right];
            arr[right] = swap;
            left++;
            right--;
        }
    }
    swap = arr[left];
    arr[left] = arr[pivotIndex];
    arr[pivotIndex] = swap;
    return left;
}

function recursionSort(arr, left, right, isDescending) {
    let pivotIndex = right;

    pivotIndex = partition(arr, left, right - 1, pivotIndex, isDescending);

    if (left < pivotIndex - 1) {
        recursionSort(arr, left, pivotIndex - 1, isDescending);
    }
    if (pivotIndex + 1 < right) {
        recursionSort(arr, pivotIndex + 1, right, isDescending);
    }
    return arr;
}

export function numberSort(arr, isDescending = false) {
    const left = 0;
    const right = arr.length - 1;

    return recursionSort(arr, left, right, isDescending);
}
