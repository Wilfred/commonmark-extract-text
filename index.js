const commonmark = require("commonmark");

function fromText(src) {
  const reader = new commonmark.Parser();
  return fromTree(reader.parse(src));
}

function fromTree(parsed) {
  const walker = parsed.walker();
  let event;

  const parts = [];
  while ((event = walker.next())) {
    const node = event.node;
    if (event.entering && node.type === "text") {
      parts.push(node.literal);
    }
    if (!event.entering && ["paragraph", "heading"].includes(node.type)) {
      parts.push("\n");
    }
  }

  return parts.join("");
}

module.exports = { fromText, fromTree };
