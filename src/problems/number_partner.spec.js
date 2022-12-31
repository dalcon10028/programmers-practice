import { solution } from "./number_partner";

describe("숫자 짝꿍", () => {
  it("결과: -1", () => {
    const answer = solution('100', '2345');

    expect(answer).toEqual("-1");
  });

  it("결과: 0", () => {
    const answer = solution('100', '203045');

    expect(answer).toEqual("0");
  });

  it("결과: 10", () => {
    const answer = solution('100', '123450');

    expect(answer).toEqual("10");
  });

  it("결과: 321", () => {
    const answer = solution('12321', '42531');

    expect(answer).toEqual("321");
  });

  it("결과: 552", () => {
    const answer = solution('5525', "1255");

    expect(answer).toEqual("552");
  });
});
