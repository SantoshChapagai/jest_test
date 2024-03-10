"use strict"

const computerRegister = require("../computerStorage");
const computers = require("../datastorage.json");

describe("Testing constructor", () => {
  test("Missing parameter throws an error", () => {
    expect(() => new computerRegister()).toThrow("data storage missing");
  });
});