# Test cases for get all computers by processor

### **getByProcessor(searchValue)**
searches computers with given processor. search value is the processor of the computer to be searched. if the processor value match it returns an array of computer object.
example:
```json
[
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
]
```
if no computer of given processor found returns an empty array []. If a parameter search Value is missing it throws an exception `missing parameter`

## Test case 1: Returns the array of computer object when searchvalue match the processor.

```json
[
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
]
```
**Input:** Search value `MotorOlè` returns
```
[
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
```


## Test case 2: If processor doesn't match
example:
**input:** search value core56
returns [];

## Test case 3: Missing parameter
**input:** search value is empty
throws an exception "missing parameter"
