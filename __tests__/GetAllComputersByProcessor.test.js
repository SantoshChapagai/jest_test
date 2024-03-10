"use strict";
const ComputerStorage = require("../computerStorage");
const computers = require("../datastorage.json");

describe("Get all computers by processor", () => {

  test("Returns the array of computer object when searchvalue match the processor", () => {
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
    const expectedResult = [{
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
    expect(register.getByProcessor("MotorOlè")).toEqual(expectedResult);
  });

  test("processor doesn't match", () => {
    const register = new ComputerStorage(computers);
    expect(register.getByProcessor("Silicon512")).toEqual([]);
  });
  test("missing parameter", () => {
    const register = new ComputerStorage(computers);
    expect(register.getByProcessor()).toEqual("missing parameters");
  })
})