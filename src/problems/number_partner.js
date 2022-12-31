/**
 * 숫자 짝꿍
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript
 */

export const solution = (X, Y) => {
  const result = [];
  const xLen = X.length;
  const yLen = Y.length;

  const xMap = new Map();
  const yMap = new Map();
  
  for (let i = 0; i < xLen; i++) 
    xMap.set(X[i], xMap.has(X[i]) ? xMap.get(X[i]) + 1 : 1);
  
  for (let i = 0; i < yLen; i++) 
    yMap.set(Y[i], yMap.has(Y[i]) ? yMap.get(Y[i]) + 1 : 1);
  

  for (const [k, v] of xMap.entries()) {
    if (!yMap.has(k)) continue;
    // Array(Math.min(v, yMap.get(k))).fill(k).forEach(a => result.push(a));
    result.push(...Array(Math.min(v, yMap.get(k))).fill(k));
  }
  
 // Node.js 16.17.0
  
  if (!result.length) return '-1';
  const answer = result.sort((a , b) => Number.parseInt(b) - Number.parseInt(a)).join('');

  return answer.charAt(0) === '0' ? '0' : answer;
}