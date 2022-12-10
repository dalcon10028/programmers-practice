export default class Heap {
  constructor() {
    this.items = [];
  }

  //값을 서로 바꾸는 메소드
  swap(index1, index2) {
    let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음
    this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장
    this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
  }

  //부모 인덱스 구하는 메소드
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  //왼쪽 자식 인덱스 구하는 메소드
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  //오른쪽 자식 인덱스 구하는 메소드
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  //부모 노드 구하는 메소드
  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  //왼쪽 자식 노드 구하는 메소드
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  //오른쪽 자식 노드 구하는 메소드
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드
  peek() {
    return this.items[0];
  }

  //힙의 크기(항목 개수)를 반환하는 메소드
  size() {
    return this.items.length;
  }
}
