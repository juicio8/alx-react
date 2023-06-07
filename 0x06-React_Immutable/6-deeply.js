import { List, Map } from "immutable";

export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2)).toJS();
}
// const page1 = {
//   "user-1": {
//     id: 1,
//     name: "test",
//     likes: {
//       1: {
//         uid: 1234,
//       },
//     },
//   },
// };

// const page2 = {
//   "user-1": {
//     likes: {
//       2: {
//         uid: 134,
//       },
//     },
//   },
// };
// const result2 = mergeDeeplyElements(page1, page2);
// console.log(result2);
