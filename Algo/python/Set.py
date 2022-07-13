

def solution():
  result = []
  str = 'abc'

  def DFS(i,arr):

    if (i == len(str)):
      return result.append(arr)

    DFS(i+1,[*arr])
    arr.append(str[i])
    DFS(i+1, [*arr])

  DFS(0,[])

  return result

print(solution())