class ListNode2 {
  toVertex: number;
  next: ListNode2 | null;
  constructor(val?: number, next?: ListNode2 | null) {
    this.toVertex = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseGraphByAdjecenyList(adjancyList: ListNode2[]) {
  let j = -1;
  const re = new Array(adjancyList.length).fill(null).map(() => {
    j++;
    return new ListNode2(j);
  });

  for (let i = 0; i < adjancyList.length; i++) {
    let curVertex = adjancyList[i];
    while (curVertex !== null) {
      // 讓新的节点原本的頭
      re[curVertex.toVertex].next = new ListNode2(i, re[curVertex.toVertex].next);
      curVertex = curVertex.next!;
    }

  }

  return re;
}

function reverseGraphByAdjecencyMatrix() {}

const aj: ListNode2[] = [];
aj.push(new ListNode2(0, new ListNode2(1, new ListNode2(4))));
aj.push(new ListNode2(1, new ListNode2(0, new ListNode2(4, new ListNode2(2, new ListNode2(3))))));
aj.push(new ListNode2(2, new ListNode2(1, new ListNode2(3))));
aj.push(new ListNode2(3, new ListNode2(1, new ListNode2(4, new ListNode2(2)))));
aj.push(new ListNode2(4, new ListNode2(3, new ListNode2(3, new ListNode2(1)))));

console.log('Original Graph by Adjacency List');
for (let i = 0; i < aj.length; i++) {
  let curVertex = aj[i].next;
  let str: number[] = [];
  while (curVertex !== null) {
    str.push(curVertex.toVertex);
    curVertex = curVertex.next;
  }
  console.log(`Vertex ${i} => ${str}`);
}

const newAj = reverseGraphByAdjecenyList(aj);

console.log('\nReverse Graph by Adjacency List');
for (let i = 0; i < newAj.length; i++) {
  let curVertex = newAj[i].next;
  let str: number[] = [];
  while (curVertex !== null) {
    str.push(curVertex.toVertex);
    curVertex = curVertex.next;
  }
  console.log(`Vertex ${i} => ${str}`);
}