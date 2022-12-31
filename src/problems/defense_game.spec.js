import { solution } from "./defense_game";

describe("디펜스 게임", () => {
  it("결과: 5", () => {
    const answer = solution(7, 3, [4, 2, 4, 5, 3, 3, 1]);

    expect(answer).toEqual(5);
  });

  it("결과: 4", () => {
    const answer = solution(2, 4, [3, 3, 3, 3]);

    expect(answer).toEqual(4);
  });
});
