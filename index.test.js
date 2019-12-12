const extract = require("./index");

/** Collapse successive whitespace characters. It's important we
 * preserve whitespace, but extra whitespace is harmless.
 */
function simplifyWhitespace(s) {
  return s
    .replace(/ +/g, " ")
    .replace(/\n+/g, "\n")
    .trim();
}

function extractSimplified(src) {
  return simplifyWhitespace(extract.fromText(src));
}

describe("extract text", () => {
  test("paragraph", () => {
    expect(extractSimplified("foo")).toBe("foo");
  });

  test("multiple paragraphs", () => {
    expect(extractSimplified("foo\n\nbar")).toBe("foo\nbar");
  });

  test("bold", () => {
    expect(extractSimplified("**foo**")).toBe("foo");
  });

  test("link", () => {
    expect(extractSimplified("[foo](/bar)")).toBe("foo");
  });

  test("heading", () => {
    expect(extractSimplified("# foo")).toBe("foo");
  });

  test("bullets", () => {
    expect(extractSimplified("* foo\n* bar")).toBe("foo\nbar");
  });

  test("combined syntax", () => {
    expect(extractSimplified("one [two](/xyz) *three*.")).toBe(
      "one two three."
    );
  });
});

describe("ignore code", () => {
  test("inline", () => {
    expect(extractSimplified("foo `bar` baz")).toBe("foo baz");
  });
  test("code block", () => {
    expect(extractSimplified("```\nfoo\n```")).toBe("");
  });
});
