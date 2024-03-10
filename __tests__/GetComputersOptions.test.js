"use strict";
const ComputerStorage = require("../computerStorage");
const computers = require("../datastorage.json");

describe("Test cases for computer options", () => {

  test("Search key matches the computer number", () => {
    const testValues = [
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
      },
      {
        "computerNumber": 2,
        "name": "Beast II",
        "processor": "Selenium II",
        "price": 15,
        "memory": 8,
        "options": [
          "Super fan",
          "Cooling system",
          "super power supply"
        ],
        "info": {
          "consumption": "A",
          "model": "chrome",
          "notes": "no comments"
        }
      },
      {
        "computerNumber": 3,
        "name": "Cera 2400",
        "processor": "Brain 456",
        "price": 25,
        "memory": 8,
        "options": [
          "Super fan",
          "super power supply",
          "cleaning set"
        ],
        "info": {
          "consumption": "A+",
          "model": "silver",
          "notes": "no comments"
        }
      },
      {
        "computerNumber": 4,
        "name": "MaxEffect 2000",
        "processor": "MotorOlè",
        "price": 36,
        "memory": 1,
        "options": [
          "coffee cup holder",
          "cleaning set",
          "Super fan"
        ],
        "info": {
          "consumption": "B",
          "model": "VIP",
          "notes": "no comments"
        }
      },
      {
        "computerNumber": 5,
        "name": "MaxEffect 2000",
        "processor": "MotorOlè",
        "price": 123,
        "memory": 32,
        "options": [
          "super power supply",
          "coffee cup holder",
          "Super fan"
        ]
      }
    ];
    const register = new ComputerStorage(testValues);
    expect(register.getOptions(1)).toEqual(["coffee cup holder", "cleaning set", "Cooling system"]);
    expect(register.getOptions(2)).toEqual(["Super fan", "Cooling system", "super power supply"]);
    expect(register.getOptions(3)).toEqual(["Super fan", "super power supply", "cleaning set"]);
    expect(register.getOptions(4)).toEqual(["coffee cup holder", "cleaning set", "Super fan"]);
    expect(register.getOptions(5)).toEqual(["super power supply", "coffee cup holder", "Super fan"]);
  });

  test("computer exists but option field is empty", () => {
    const testValues = [
      {
        "computerNumber": 6,
        "name": "MaxEffect 2000",
        "processor": "MotorOlè",
        "price": 123,
        "memory": 32,
        "options": [
        ]
      }
    ];
    const register = new ComputerStorage(testValues);
    expect(register.getOptions(6)).toEqual([]);
  });

  test("Search key does not match the computer number", () => {
    const register = new ComputerStorage(computers);
    expect(register.getOptions(8)).toEqual([]);
  });
  test("parameter missing", () => {
    const register = new ComputerStorage(computers);
    expect(register.getOptions()).toEqual([]);
  })

});