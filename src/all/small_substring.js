/**
 * 크기가 작은 부분문자열
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */

export const solution = (t, p) => {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.substring(i, i + p.length);
    if (Number.parseInt(substring) <= Number.parseInt(p))
      answer++;
  }

  return answer;
};
