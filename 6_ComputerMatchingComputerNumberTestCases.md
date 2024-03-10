# Test cases to get a computer matching computer number

### **getMatchingComputer(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique. Search key is the computerNumber of a computer. If the search key match the computerNumber it returns a computer object. If there is no match, it returns a null. If the parameter is missing it throws an exception `missing parameter`.

## Test case 1: if search key matches the computerNumber
**input:** search value 1
returns
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
  }
]
```

## Test case 2: search key doesn't match the computer number
**input:** search value 10
```
returns null
```
## Test case 3: Missing parameter
```
returns missing parameter
```