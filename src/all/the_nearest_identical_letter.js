/**
 * 가장 가까운 글자
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086
 */

export const solution = (s) => {
  const charMap = new Map();
  return s.split("").reduce((answer, char, index) => {
    if (charMap.has(char)) answer.push(index - charMap.get(char));
    else answer.push(-1);
    charMap.set(char, index);
    return answer;
  }, []);
};
