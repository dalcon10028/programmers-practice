import { solution } from "./number_of_consecutive_partial_sequence_agreements";

describe("연속 부분 수열 합의 개수", () => {
  it("결과: 18", () => {
    const answer = solution([7,9,1,1,4]);

    expect(answer).toEqual(18);
  });
});
