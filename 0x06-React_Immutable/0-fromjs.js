// import { fromJS } from "immutable";
const { fromJS } = require("immutable");
function getImmutableObject(object) {
  const map = fromJS(object);
  return map;
}

module.exports = getImmutableObject;
