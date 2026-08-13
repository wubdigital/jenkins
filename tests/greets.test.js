const { test } = require("node:test");
const assert = require("node:assert");

const { greets, randomGreets } = require("../greets");

test("יש לפחות 5 ברכות במפעל", () => {
  assert.ok(greets.length >= 5, "צריך לפחות 5 ברכות"); //
});

test("כל ברכה היא מחרוזת לא ריקה", () => {
  for (const greet of greets) {
    assert.strictEqual(typeof greet, "string", "ברכה חייבת להיות טקסט");
    assert.ok(greet.trim().length > 0, "נמצאה ברכה ריקה!");
  }
});

test("Greets מחזיר ברכה מתוך הרשימה", () => {
  const result = randomGreets();
  assert.ok(greets.includes(result), "הברכה שהוגרלה חייבת להיות מהרשימה");
});
// assert.ok(true); //עובר
// assert.ok(false); //נכשל
