# Lecture Notes

## Persistance of Data
### What
- the ability to store data to be accessed at a later time
- databases (301)
- local storage
  - an object available to your browser specific to your computer that can store data as a property
  - stored in a file on your computer in Chrome application files

### why?
- able to retain information accross multiple pages and throughout reloads

## Local Storage
- data stored on the Local Storage object in key: value pairs
- `coffee: [drinks, drinks]`
- `localStorage.getItem('coffee')`

### built in methods
- `getItem(key)`
- `setItem(key, value)`
- `clear()`
- `removeItem(key)`

JSON
- https://www.json.org/json-en.html


Get items from storage:
- localStorage.getItem('key')
- check if it is null/valid
- if it is valid then JSON.parse(data)
- perhaps reinstantiate each value

Set items into storage
- decide what you want to store (value)
- decide what you want to call it (key)
- turn your value into a string JSON.stringify(value)
- localStorage.setItem(key, stringValue)