import { insertionSort, runTests as insertionSortTest } from './sort/insertion.mjs'
import { mergeSort, runTests as mergeSortTest } from './sort/merge.mjs'

insertionSortTest()
mergeSortTest()

insertionSort([])
mergeSort([])
