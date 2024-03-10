# Test cases for getInfo

### **getInfo(searchKey)**
searches the computer matching the searchKey and if match is found returns the info object. If the search key is missing or the given search key does not match with any computer it should return null.

for example:
```json
{
      "consumption": "C",
      "model": "gold",
      "notes": "no comments"
    }
```

## Test case 1: computer matching the search key

- **Input:** Search for computer 1.
- **Output:** The getInfo method return 
```json
{
      "consumption": "C",
      "model": "gold",
      "notes": "no comments"
    }
```
- **Input:** Search for computer 2.
- **Output:** The getInfo method return 
```json
{
      "consumption": "A",
      "model": "chrome",
      "notes": "no comments"
    }
```

## Test case 2: The searchKey doesn't match with the computer

- **Input:** Search for computer 8.
```
return null
```

## Test case 3: The missing searchKey parameter
```
return null
```

## Test case 4: Invalid searchKey type
- **Input:** Search for computer "A".
```
return null
```
