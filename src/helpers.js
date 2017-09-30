function numberOfKeys (obj) {
  return Object.keys(obj).length;
}

// https://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array
function objectToArray (obj) {
  return Object.keys(obj).map(key => obj[key]);
}

export default {
  numberOfKeys,
  objectToArray
};
