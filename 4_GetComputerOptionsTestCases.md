# Test cases for get computer options

### **getOptions(searchKey)**
Returns an array of computer options. If the computer Number searched match with the computerNumber in the list. It retturns an array.
example:
"options": [
      "Super fan",
      "Cooling system",
      "super power supply"
    ]


    If computer number doesn't match with search Key or searchKey parameter is missing or the computer has no options, it returns and empty array.

    return [];
  

## Test case 1: If the search key matches the computer number
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
returns
```
[
  "options": [
      "coffee cup holder",
      "cleaning set",
      "Cooling system"
    ],
    "options": [
      "Super fan",
      "Cooling system",
      "super power supply"
    ],
 "options": [
      "Super fan",
      "super power supply",
      "cleaning set"
    ],
     "options": [
      "coffee cup holder",
      "cleaning set",
      "Super fan"
    ],
     "options": [
      "super power supply",
      "coffee cup holder",
      "Super fan"
    ]
]

```

## Test case 2: If computer exists but options field is empty
 tested with modified data
```json
[
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
```
return [];

## Test case 3: If search key doesn't match the computer number
**Input:** Entered invalid computer number
return [];

## Test case 4: Parameter missing
return [];
