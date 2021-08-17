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

// 처음 중간번호를 정한다.
// 중간번호 기준으로 큰 번호는 오른쪽으로 작은 번호는 왼쪽으로 정렬시킨다.
// 하위 배열에 대해 재귀로 호출한다.

/*
  
*/
