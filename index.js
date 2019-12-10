const commonmark = require("commonmark");

function fromTree(parsed) {
  const walker = parsed.walker();
  let event;

  const parts = [];
  while ((event = walker.next())) {
    const node = event.node;
    if (event.entering && node.type === "text") {
      parts.push(node.literal.trim());
    }
  }

  return parts.join(" ");
}

module.exports = { fromTree };
