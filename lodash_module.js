const lodash = require('lodash')

const items = [1,[2,[3,[4]]]];
console.log(items);
const newItems = lodash.flattenDeep(items); // to flatt demantional array
console.log(newItems);

