# pauls-word-boundary

Find the word boundaries from a given position within a string.

```js
const {findWordBoundary} = require('pauls-word-boundary')

var str = 'https://github.com/pfrazee/pauls-word-boundary?foo=bar'

findWordBoundary(str, 2) // => {start: 0, end: 5} ('https')
findWordBoundary(str, 10) // => {start: 8, end: 13} ('github')
```

Currently uses this regex to determine the word boundary: `/[^a-z0-9-]/i`