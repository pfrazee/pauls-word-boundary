const {findWordBoundary} = require('./')
const test = require('ava')

function pullWord (str, index) {
  var {start, end} = findWordBoundary(str, index)
  if (start === -1 || end === -1) return ''
  return str.slice(start, end)
}

function testRange (t, str, start, end, value) {
  for (let i = start; i <= end; i++) {
    t.deepEqual(pullWord(str, i), value, `checking ${i}`)
  }
}

test('URL', t => {
  var str = 'https://github.com/pfrazee/pauls-word-boundary?foo=bar'

  t.deepEqual(pullWord(str, -1), '')
  testRange(t, str, 0, 4, 'https')
  testRange(t, str, 5, 7, '')
  testRange(t, str, 8, 13, 'github')
  t.deepEqual(pullWord(str, 14), '')
  testRange(t, str, 15, 17, 'com')
  t.deepEqual(pullWord(str, 18), '')
  testRange(t, str, 19, 25, 'pfrazee')
  t.deepEqual(pullWord(str, 26), '')
  testRange(t, str, 27, 45, 'pauls-word-boundary')
  t.deepEqual(pullWord(str, 46), '')
  testRange(t, str, 47, 49, 'foo')
  t.deepEqual(pullWord(str, 50), '')
  testRange(t, str, 51, 53, 'bar')
  t.deepEqual(pullWord(str, 54), '')
})