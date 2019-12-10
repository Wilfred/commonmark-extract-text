const extract = require("./index");

function trimmedExtract(src) {
  return extract.fromText(src).trim();
}

describe("extract text", () => {
  test("paragraph", () => {
    expect(trimmedExtract("foo")).toBe("foo");
  });

  test("multiple paragraphs", () => {
    expect(trimmedExtract("foo\n\nbar")).toBe("foo bar");
  });

  test("bold", () => {
    expect(trimmedExtract("**foo**")).toBe("foo");
  });

  test("link", () => {
    expect(trimmedExtract("[foo](/bar)")).toBe("foo");
  });

  test("heading", () => {
    expect(trimmedExtract("# foo")).toBe("foo");
  });

  test("bullets", () => {
    // TODO: Split over multiple lines
    expect(trimmedExtract("* foo\n* bar")).toBe("foo bar");
  });
});

describe("ignore code", () => {
  test("inline", () => {
    expect(trimmedExtract("foo `bar` baz")).toBe("foo baz");
  });
  test("code block", () => {
    expect(trimmedExtract("```\nfoo\n```")).toBe("");
  });
});
