# Lecture Notes

## forms in html
- forms take in data from the user and do something with it
- the default behavior of form submission is weird - `preventDefault()` default of forms is to erase all of the content the user entered
- all form data comes in as string data
- we can recive the data by listening for the form to be submitted (or for a button click) 

## Browser Events
- pretty much any time a user interacts with the page it is an event
- you can activate a **listener** in javascript to react if a specific event occurs
https://www.freecodecamp.org/news/javascript-events-explained-in-simple-english/

## JS event listeners 
- a code statement we set up (a method) that allows us to define something to listen to/on, what we are listening for, what to do when we hear it
- specify a `target` to listen to
- add a listener (method)
- say what to listen for (eg. 'click')
- and what to do if you hear it


## Organizing your js code
1. Declare Global Variables
2. Declare Constructor functions - name should be capitalized!
3. Declare prototype methods
4. Declare regular functions
5. Add event listeners
6. Call functions
