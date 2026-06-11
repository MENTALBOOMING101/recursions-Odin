// describe('Fibonacci', () => {
//     test.skip()
// })

import { halfSort, mergeSort, fibs, fibsRec } from "./recursions"


describe('Merge Sort', () => {
    test.skip('Sorting Empty', () => {
        expect(mergeSort([])).toEqual([])
    })

    test.skip('Sorting Array with one element', () => {
        expect(mergeSort([1])).toEqual([1])
    })

    test.skip('Sorting Array with two element', () => {
        expect(mergeSort([3, 1])).toEqual([1, 3])
    })

    test('Sorting Array with three element', () => {
        expect(mergeSort([4, 1, 2, 6])).toEqual([1, 2, 4, 6])
    })

    test('Sorting Array with Odd amount of element', () => {
        expect(mergeSort([4, 5, 2, 1, 6, 7, 3])).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    test('Sorting Array with Even Amount of Element', () => {
        expect(mergeSort([4, 5, 2, 6, 1, 9])).toEqual([1, 2, 4, 5, 6, 9])
    })
    test('Sorting With Duplicate', () => {
        expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
})

describe('HalfSort', () => {
    test('Sorting Empty', () => {
        expect(halfSort([], [])).toEqual([])
    })

    test('Sorting Array with one element', () => {
        expect(halfSort([2], [1])).toEqual([1, 2])
    })

    test('Sorting with even arrays', () => {
        expect(halfSort([4, 5, 6], [1, 3, 8])).toEqual([1, 3, 4, 5, 6, 8])
    })

    test('Test with uneven arrays', () => {
        expect(halfSort([1, 2, 3, 9], [4, 6, 7])).toEqual([1, 2, 3, 4, 6, 7, 9])
    })

})

describe("Fibonacci Iteration", () => {
    test('Fib 8', () => {
        expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
    test('Fib 8', () => {
        expect(fibs(7)).toEqual([0, 1, 1, 2, 3, 5, 8])
    })
    test('Fib 8', () => {
        expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5])
    })
    test('Fib 8', () => {
        expect(fibs(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377])
    })
})
describe("Fibonacci Recursive", () => {
    test('Fib 8', () => {
        expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
    test('Fib 8', () => {
        expect(fibsRec(7)).toEqual([0, 1, 1, 2, 3, 5, 8])
    })
    test('Fib 8', () => {
        expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5])
    })
    test('Fib 8', () => {
        expect(fibsRec(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377])
    })
})