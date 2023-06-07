import { List, Map } from "immutable";

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  let l = Map(page1).merge(Map(page2));
  return l.toList();
}
const page1 = [1, 2, 3];
const page2 = [4, 5, 6];
const result1 = concatElements(page1, page2);
console.log(result1);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const result2 = mergeElements(obj1, obj2);
console.log(result2);
