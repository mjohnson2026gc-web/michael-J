# michael

Tiny JS utility library for formatting first and last names.

## Why this repo exists

Originally the README included a very small demo snippet. To avoid confusion and show this is a real, maintainable library, this repo now includes:
- a small exported module (`michael.js`),
- package.json + metadata,
- a unit test,
- MIT license.

## Usage

ESM:
```js
import formatName from 'michael'; // when published / installed
// local file:
import formatName from './michael.js';

console.log(formatName('michael','johnson')); // "Michael Johnson"
```

CommonJS:
```js
const formatName = require('./michael.js');
console.log(formatName('michael','johnson')); // "Michael Johnson"
```

## API

- `formatName(firstName, lastName)` — returns a normalized full name, or a single name if only one provided.

## Development

- Run tests: `npm install && npm test`

## License

MIT
