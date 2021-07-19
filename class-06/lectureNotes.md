# Lecture Notes

## const
### what?
- a constant variable. To be used when we have a variable set to a value that we never plan on changing. Use whenever possible.
### why?
- because it never can never be changed this prevents errors and tells a better story with our code.

`const newVariable = 'unchanging';`

Arrays and Objects can always be declared with const... we can alter the interior of the structure, we can not reasign 

`const myArray = []`

`myArray[0] = 'banana'`

`myArray = 'banana'`

`myArray = 3;`

## Objects
### what? 
- JavaScript objects are convenient & powerful ways to group data and functions. 
- They store data as properties, which are represented as key: value pairs, and can have methods, which are functions associated with the object.

- Similar to array, but with semantic element names

``` javaScript
const myArray = ['a', 'b', 'c']

myArray[0]

// with arrays are keys are the numbers. We use the key to access the value

const myObj = {0: 'a', 1: 'b', 2: 'c'}
myObj.0

```

## Adding Something to the DOM

### The DOM
"The DOM" (Document Object Model) is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object.

Here is a quick exercise to prove this point:

type document in the console within your browser
find document.body
actually type in document.body
change the document.body.textContext = 'to something else'
look at all the options on the document. dot notation.
Within the document object, we have a method in there called getElementById. This allows us to "get a specific element within the HTML by specifying the id"

We can only add ONE THING AT A TIME.

As an example, let's add a <p> to an existing <div>

This is our existing HTML:

<div id="parentElement">
</div>
Steps
Make a JavaScript reference (a variable) to the parent element
Create the child element we want to add and save it as a variable
Give the child content - in this case, the content is text
Append the child to the parent
JavaScript:

const parent = document.getElementById('parentElement');  
const child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
Finished HTML:

<div id="parent">
  <p>Some words we want in our p element</p>
</div>