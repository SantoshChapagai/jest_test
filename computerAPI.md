chapagai santosh
# **End assignment** (computer)


## Task: Create and test ComputerStorage class
Create a class `ComputerStorage` for computer data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

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


# ComputerStorage API

## Constructor

### **constructor(jsondata)**
Initializes ComputerStorage object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **getInfo(searchKey)**
searches the computer matching the searchKey and if match is found returns the info object otherwise null is returned

>Parameters:
>>searchKey is the computerNumber of the computer

>Returns:
>>returns the info object of the computer matching the searchKey. If no computer matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **getPrice(computerNumber)**
get the price of the computer

>Parameters:
>>computerNumber of the computer which price is to be returned

>Returns:
>>returns the price of a computer matching the given computerNumber

>Throws:
>>if no computer with the given computerNumber is  found throws an exeption `'nothing found with given'`

### **getOptions(searchKey)**
Returns an array of computer options. If none found, returns an empty array.

>Parameters:
>>searchKey is the computerNumber of the computer

>Returns:
>>options of the computer as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

### **getByProcessor(searchValue)**
searches computers with given processor

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>Returns an array of computer objects of given processor. If no computer of given processor is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **getMatchingComputer(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key computerNumber of the computer

>Returns:
>>returns the computer object matching the computerNumber or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

# The project

## Create a folder for the testproject
- the name of the folder should be `Chapagai_Santosh_computer`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file