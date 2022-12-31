/**
 * 연속 부분 수열 합의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/131701
 */

export const solution = (elements) => {
  const len = elements.length;
  const sum = [];
  for (let i = 0; i < len * 2; i++) 
    sum.push(elements[i % len] + (!sum.length ? 0 : sum[sum.length - 1]))
  let answer = new Set();
  for (let i = 1; i <= len; i++) {
    for (let j = i; j < len * 2; j++) {
      answer.add(sum[j] - sum[j - i])
    }
  }
  
  return answer.size;
}