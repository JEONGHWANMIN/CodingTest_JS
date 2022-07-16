def QuickSort(array , start , end):
  if start >= end:
    return
  pivot = start
  left = start + 1
  right = end

  while (left <= right):
    while(left <= end and array[left] <= array[pivot]):
      left += 1
    while(right > start and array[right] >= array[pivot]):
      right -= 1
    if (left > right):
      array[left], array[right] = array[right] , array[left] 
    else:
      array[left] , array[right] = array[right], array[left]
  QuickSort(array, start, right-1)
  QuickSort(array, right+1, end)

array = [3,2,5,5,1,2,3,5,9,10,2,25]
QuickSort(array, 0, len(array)-1)
print(array)