describe("가장 가까운 같은 글자", () => {
  let solution;

  beforeEach(() => {
    jest.resetModules();
    solution = require("./the_nearest_identical_letter");
  });

  it("결과: [-1, -1, -1, 2, 2, 2]", () => {
    const answer = solution("banana");

    expect(answer).toStrictEqual([-1, -1, -1, 2, 2, 2]);
  });

  it("결과: [-1, -1, 1, -1, -1, -1]", () => {
    const answer = solution("foobar");

    expect(answer).toStrictEqual([-1, -1, 1, -1, -1, -1]);
  });
});
