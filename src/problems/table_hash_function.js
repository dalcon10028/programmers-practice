/**
 * 테이블 해시 함수
 * https://school.programmers.co.kr/learn/courses/30/lessons/147354
 */

export const solution = (data, col, row_begin, row_end) => {
  return data.sort((row1, row2) => (
    row1[col-1] === row2[col-1] ? 
      row2[0] - row1[0] :
      row1[col-1] - row2[col-1]
  ))
  .slice(row_begin - 1, row_end)
  .map((row, i) => row.reduce((s, cell) => s + cell % (row_begin + i), 0))
  .reduce((acc, s) => acc ^ s);
};
