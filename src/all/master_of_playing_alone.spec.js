import { solution } from "./master_of_playing_alone";

describe("혼자 놀기의 달인", () => {
  it("결과: 12", () => {
    const answer = solution([8, 6, 3, 7, 2, 5, 1, 4]);

    expect(answer).toEqual(12);
  });

  it("결과: 1", () => {
    const answer = solution([1, 2]);

    expect(answer).toEqual(1);
  });
});
