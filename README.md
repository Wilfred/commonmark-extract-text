# commonmark-extract-text [![CircleCI](https://circleci.com/gh/Wilfred/commonmark-extract-text.svg?style=svg)](https://circleci.com/gh/Wilfred/commonmark-extract-text)

Extracts plain prose from commonmark source code. Useful for text
analysis of commonmark.

## Usage

```javascript
var extract = require("commonmark-extract-text");

extract.fromText("# hello\n\nThis is **important**.");
```

