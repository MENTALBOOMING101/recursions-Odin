export const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    else {
        let left = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)))
        let right = mergeSort(arr.slice(Math.ceil(arr.length / 2), arr.length))
        return halfSort(left, right)
    }
}

export function halfSort(firstArray, secondArray) {
    let sortedArray = []

    let i = 0
    let j = 0

    while ((i < firstArray.length) && (j < secondArray.length)) {
        if (firstArray[i] < secondArray[j]) {
            sortedArray.push(firstArray[i])
            i++
        }
        else {
            sortedArray.push(secondArray[j])
            j++
        }

    }

    if (firstArray.length != i) {
        sortedArray = sortedArray.concat(firstArray.slice(i))
    }
    if (secondArray.length != j) {
        sortedArray = sortedArray.concat(secondArray.slice(j))
    }

    return sortedArray



}


export const fibs = (numofSequence) => {
    let arr = []
    for (let i = 0; i < numofSequence; i++) {
        if (i < 2) {
            arr.push(i)
        }
        else {
            arr.push(arr[i - 1] + arr[i - 2])
        }
    }
    return arr
}

export const fibsRec = (numofSequence) => {
    if (numofSequence == 1) {
        return [0]
    }
    else if (numofSequence == 2) {
        let arr= fibsRec(numofSequence-1)
        arr.push(1)
        return arr
    }
    else {
        let arr = fibsRec(numofSequence-1)
        arr.push(arr[arr.length-1] + arr[arr.length-2]) 
        return arr
    }

}
