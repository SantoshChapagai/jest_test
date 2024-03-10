"use strict"
module.exports = class ComputerStorage {
  #register

  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.#register = data;
  };

  getInfo(searchKey) {
    const computer = this.#register.find((computer) => computer.computerNumber === searchKey);
    if (computer) {
      return computer.info;
    } else {
      return null;
    }

  }

  getPrice(computerNumber) {
    if (computerNumber === undefined) {
      return "missing parameter";
    }
    const computer = this.#register.find((comp) => comp.computerNumber === computerNumber);
    if (computer) {
      return computer.price
    } else {
      return "nothing found with given number";
    }

  }

  getOptions(searchKey) {
    const computer = this.#register.find((comp) => comp.computerNumber === searchKey);
    if (computer) {
      return computer.options.length > 0 ? computer.options : [];
    } else {
      return [];
    }
  }

  getByProcessor(searchValue) {
    if (searchValue === undefined) {
      return "missing parameters";
    }
    const computer = this.#register.filter((computer) => computer.processor === searchValue);
    if (computer) {
      return computer || []
    }

  }
  getMatchingComputer(searchKey) {
    if (searchKey === undefined) {
      return "missing parameters";
    }
    const computer = this.#register.find((computer) => computer.computerNumber === searchKey);
    return computer || null;


  }
}