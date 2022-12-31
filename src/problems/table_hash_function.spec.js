import { solution } from "./table_hash_function";

describe("테이블 해시 함수", () => {
  it("결과: 4", () => {
    const answer = solution([[2,2,6],[1,5,10],[4,2,9],[3,8,3]], 2, 2, 3);

    expect(answer).toEqual(4);
  });
});
