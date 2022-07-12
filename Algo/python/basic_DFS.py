def DFS(graph , v , visited):
  visited[v] = True
  print(v, end='')
  for i in graph[v]:
    if not visited[i]:
      DFS(graph,i,visited)


graph = [
  [],
  [2,3,8],
  [1,7],
  [1,4,5],
  [3,5],
  [3,4],
  [7],
  [2,6,8],
  [1,7]
]

visited = [False] * 9
print(visited)

DFS(graph,1,visited)



# visit = [False, True, True,True,True,True, True,True, True]
# stack = [] -> [2,3,8] , [4,5], [3,5],[1,4,5],[3,4],
# print = 1 ,2, 7 , 6 , 8 , 4 , 3 , 5 , 

