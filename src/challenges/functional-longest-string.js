/* Write a pure function that accepts a list of strings, return the longest string. Use no loops */

function longest(list) {
  const lengths = list.map((str, index) => ({
    index,
    length: str.length
  }));

  console.dir(lengths);

  const i = lengths.reduce(
    (acc, obj) => (obj.length > acc ? obj.index : acc),
    -1
  );

  return list[i];
}
