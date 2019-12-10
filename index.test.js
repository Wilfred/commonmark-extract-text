const extract = require("./index");

function trimmedExtract(src) {
  return extract.fromText(src).trim();
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
