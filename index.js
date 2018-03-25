
const WORD_BOUNDARY_REGEX = /[^a-z0-9-]/i

exports.findWordBoundary = function findWordBoundary (str, index) {
  // corner cases
  if (index < 0 || index >= str.length) return {start: index, end: index}

  // find end
  // fairly simple: slice the string from our index and run search
  var end = str.slice(index).search(WORD_BOUNDARY_REGEX) + index
  if (end === index - 1) end = str.length

  // find start
  // slightly more complex: iterate our search, slicing along, until we pass the index
  var start = 0
  while (start < index) {
    let i = str.slice(start).search(WORD_BOUNDARY_REGEX) + start
    if (i > index || i === (start - 1)) break
    start = i + 1
  }

  return {start, end}
}