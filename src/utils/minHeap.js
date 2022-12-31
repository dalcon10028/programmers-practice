import Heap from "./heap";

export default class MinHeap extends Heap {
  // MinHeap 클래스는 Heap 클래스를 상속받았으므로 Heap 클래스의 메소드를 모두 사용할 수 있다.

  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(index, smallerIndex);

      index = smallerIndex;
    }
  }

  // 힙에 원소를 추가하는 함수

  add(item) {
    this.items[this.items.length] = item;

    this.bubbleUp();
  }

  // 힙에서 원소를 빼내는 함수

  // 최소 힙이라면 최솟값이 빠져나올 것이고 최대힙이라면 최댓값이 빠져나온다.

  poll() {
    let item = this.items[0]; // 첫번째 원소 keep

    this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사

    this.items.pop(); // 맨 마지막 원소 삭제

    this.bubbleDown();

    return item; // keep해둔 값 반환
  }
}
