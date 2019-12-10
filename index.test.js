const commonmark = require("commonmark");
const extract = require("./index");

function trimmedExtract(src) {
  const reader = new commonmark.Parser();
  const parsed = reader.parse(src);

  return extract.fromTree(parsed).trim();
}

describe("extract text", () => {
  test("paragraph", () => {
    expect(trimmedExtract("foo")).toBe("foo");
  });

  test("bold", () => {
    expect(trimmedExtract("**foo**")).toBe("foo");
  });

  test("link", () => {
    expect(trimmedExtract("[foo](/bar)")).toBe("foo");
  });
});

describe("ignore code", () => {
  test("inline", () => {
    expect(trimmedExtract("foo `bar` baz")).toBe("foo baz");
  });
});
