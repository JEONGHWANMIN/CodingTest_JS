import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
q = deque(enumerate(map(int, input().split())))

def solution(n, input_papers):
    print(n)
    print(input_papers)
    papers = list(map(int, input_papers.split()))
    que = deque(range(1, n + 1))

    result = []

    while que:
        result.append(que.popleft())
        pop_paper = papers.pop(0)

        if pop_paper > 0:
            for _ in range(pop_paper - 1):
                pop_number = que.popleft()
                pop_paper = papers.pop(0)

                que.append(pop_number)
                papers.append(pop_paper)

        elif pop_paper < 0:
            for _ in range(abs(pop_paper)):
                pop_number = que.pop()
                pop_paper = papers.pop()

                que.appendleft(pop_number)
                papers.appendleft(pop_paper)

    return " ".join(map(str, result))

print(solution(n,q))