/**
 * 디펜스 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/142085
 */

import MaxHeap from "../data_structure/maxHeap";

// 종료
// 모든 라운드를 통과했을 경우
// 많은 적을 만났는데 무적권이 없을 경우

// 진행
// 많은 적을 만났는데 heap이 안비어있고, 무적권이 있는경우
// 많은 적을 만났는데 heap이 비어있고, 무적권이 있는경우

export const solution = (n, k, enemy) => {
  const heap = new MaxHeap();
  let round;

  for (round = 0; round < enemy.length; round++) {
    // 많은 적을 만났는데
    if (n < enemy[round]) {
      if (k) {
        // 무적권이 있고
        if (heap.empty()) {
          // 힙이 비어있는 경우
          k--;
          continue;
        }
        // 힙이 안비어있는경우
        k--; // 무적권 쓰고
        n += heap.pop(); // 쓴 만큼 채워지고
        round--; // 현재 라운드 다시 진행
        continue;
      } else break; // 무적권이 없는 경우
    }
    n -= enemy[round];
    heap.push(enemy[round]);
  }

  return round;
};
