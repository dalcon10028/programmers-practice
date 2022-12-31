import { solution } from "./small_substring";

describe("크기가 작은 부분문자열", () => {
  it("결과: 2", () => {
    const answer = solution("3141592", "271");

    expect(answer).toEqual(2);
  });

  it("결과: 8", () => {
    const answer = solution("500220839878", "7");

    expect(answer).toEqual(8);
  });

  it("결과: 3", () => {
    const answer = solution("10203", "15");

    expect(answer).toEqual(3);
  });
});
