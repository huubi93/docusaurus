// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
export function difference(...arrays) {
  return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
}

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
export function sortBy(array, getter) {
  function compareBy(getter) {
    return (a, b) =>
      getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0;
  }

  const sortedArray = [...array];
  sortedArray.sort(compareBy(getter));
  return sortedArray;
}
