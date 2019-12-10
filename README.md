# commonmark-extract-text

Extracts plain prose from commonmark source code. Useful for text
analysis of commonmark.

## Usage

```javascript
var extract = require("commonmark-extract-text");

extract.fromText("# hello\n\nThis is **important**.");
```

