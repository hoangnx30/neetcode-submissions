class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def merge(arr, l, m, r):
            leftArr, rightArr = arr[l : m + 1], arr[m + 1 : r + 1]
            i, j, k = l, 0, 0

            while j < len(leftArr) and k < len(rightArr):
                if leftArr[j] <= rightArr[k]:
                    arr[i] = leftArr[j]
                    j += 1
                else:
                    arr[i] = rightArr[k]
                    k += 1
                i += 1

            while j < len(leftArr):
                arr[i] = leftArr[j]
                i += 1
                j += 1

            while k < len(rightArr):
                arr[i] = rightArr[k]
                i += 1
                k += 1

        def mergeSort(arr, l, r):
            if l >= r:
                return

            mid = (l + r) // 2
            mergeSort(arr, l, mid)
            mergeSort(arr, mid + 1, r)
            merge(arr, l, mid, r)

        mergeSort(nums, 0, len(nums) - 1)
        return nums
