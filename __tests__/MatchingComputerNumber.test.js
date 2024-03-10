"use strict";
const ComputerStorage = require("../computerStorage");
const computers = require("../datastorage.json");

describe("Test cases to get a computer matching computer number", () => {

  test("search key matches the computerNumber", () => {
    const expectedResult =
    {
      "computerNumber": 1,
      "name": "Cera 2400",
      "processor": "MotorOlè",
      "price": 10,
      "memory": 1,
      "options": [
        "coffee cup holder",
        "cleaning set",
        "Cooling system"
      ],
      "info": {
        "consumption": "C",
        "model": "gold",
        "notes": "no comments"
      }
    }

    const register = new ComputerStorage(computers);
    expect(register.getMatchingComputer(1)).toEqual(expectedResult);

  });
  test("search key doesn't match the computer number", () => {
    const register = new ComputerStorage(computers);
    expect(register.getMatchingComputer(10)).toEqual(null)
  });
  test("missing parameters", () => {
    const register = new ComputerStorage(computers);
    expect(register.getMatchingComputer()).toEqual("missing parameters");
  });
})