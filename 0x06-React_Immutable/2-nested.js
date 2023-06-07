import { Map } from "immutable";

function accessImmutableObject(object, array) {
  if (!array.length) {
    return undefined;
  }
  let obj = Map(object);
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      obj = obj.get(array[i]);
    } else {
      obj = obj[array[i]];
    }
  }
  return obj;
  //   return obj[array[1]];
}
// console.log(
//   accessImmutableObject(
//     {
//       name: {
//         first: {
//           ss: "mm",
//         },
//         last: "Salva",
//       },
//     },
//     ["name", "first", "ss"]
//   )
// );
