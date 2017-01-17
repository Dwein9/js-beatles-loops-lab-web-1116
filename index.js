function theBeatlesPlay(ppl, inst) {
  var hi = [], i = 0
// for (let i = 0, length = ppl.length; i < length; i++) {
while (i < ppl.length) {
    hi.push(`${ppl[i]} plays ${inst[i]}`)
    i += 1
  }
  return hi
}

function johnLennonFacts (arr) {
  var hi = [], i = 0
  while (i < arr.length) {
      hi.push(`${arr[i]}!!!`)
      i += 1
    }
    return hi
}

function iLoveTheBeatles (num) {
  var hi = []
  do {
    hi.push("I love the Beatles!")
    num += 1
  } while (num < 15);
  return hi
}
