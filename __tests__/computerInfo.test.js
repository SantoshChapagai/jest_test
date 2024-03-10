"use strict";
const ComputerStorage = require("../computerStorage");
const computers = require("../datastorage.json");

describe("test cases for get info", () => {
  test("computers matching the search key", () => {
    const testValues = [
      {
        computerNumber: 1,
        name: "Cera 2400",
        processor: "MotorOlè",
        price: 10,
        memory: 1,
        options: [
          "coffee cup holder",
          "cleaning set",
          "Cooling system"
        ],
        info: {
          consumption: "C",
          model: "gold",
          notes: "no comments"
        }
      },
    ]
    const expectedResult = {
      consumption: "C",
      model: "gold",
      notes: "no comments"
    };

    const register = new ComputerStorage(testValues);
    expect(register.getInfo(1)).toEqual(expectedResult);

  });

  test("The searchKey doesn't match with the computer", () => {
    const register = new ComputerStorage(computers);
    expect(register.getInfo(8)).toEqual(null);
  });

  test("The missing searchKey parameter", () => {
    const register = new ComputerStorage(computers);
    expect(register.getInfo()).toEqual(null);
  });
  test("Invalid searchKey type", () => {
    const register = new ComputerStorage(computers);
    expect(register.getInfo("A")).toEqual(null);
  });

});