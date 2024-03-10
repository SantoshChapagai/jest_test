# Test cases for getPrice

### **getPrice(computerNumber)**
get the price of the computer. The computer number of the computer which price should be returned pass as a parameter. If computer number matches with the computer in storage will return the price of the computer. If there is no computer with the given computerNumber then it will throws an exception `nothing found with given number`.
If the parameter is missing throw an exception "missing parameter".

Example:
```
10
```

## Test case 1: Computer price if exists
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
return
```
10, 15, 25, 36, 123
```

## Test case 2: computer number doesn't exists

```
return thows an exception("nothing found with given number");
```
## Test case 3: Parameter mising

```
return thows an exception("missing parameter");
```
