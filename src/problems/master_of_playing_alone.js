/**
 * 혼자 놀기의 달인
 * https://school.programmers.co.kr/learn/courses/30/lessons/131130
 */

export const solution = (cards) => {
  const visited = Array(cards.length).fill(false);
  const cardGroup = [];

  const groupLength = (cards, index, count) => {
    if (visited[index]) return count;
    visited[index] = true;
    return groupLength(cards, cards[index] - 1, count + 1);
  };

  cards.forEach((card) => {
    cardGroup.push(groupLength(cards, card - 1, 0));
  });

  cardGroup.sort((a, b) => a - b);
  return cardGroup.pop() * cardGroup.pop();
};
