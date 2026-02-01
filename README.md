# michaeljs

A small, open-source JavaScript utility library for formatting and validating personal names.

Features:
- formatName(first, last): Trim + capitalize + join (e.g. "michael", "johnson" -> "Michael Johnson")
- isValidName(name): Simple validation for typical name characters
- formatWithTitle(first, last, { title }): Adds a title if provided

Installation:
```bash
npm install michaeljs
```

Usage:
```javascript
const { formatName, isValidName, formatWithTitle } = require('michaeljs');

console.log(formatName('michael', 'johnson')); // "Michael Johnson"
console.log(isValidName("O'Connor")); // true
console.log(formatWithTitle('michael', 'johnson', { title: 'Dr.' })); // "Dr. Michael Johnson"
```

License: MIT
Repository: https://github.com/your-username/michaeljs
