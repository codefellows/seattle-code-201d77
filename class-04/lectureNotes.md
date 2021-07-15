# Lecture Notes

## display: inline
- puts an element 'inline' with the other elements around it. Any height and width properties will have no effect.

## display: inline-block
- Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

- Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

- Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

## display: block
- Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width of it's containing element.

## positioning, 2 main types
- static type
- relative type
  - relative
  - absolute
  - fixed

### static is standard, where the element would normally fit on the screen

### Position Relative
Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute
Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed
fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.
<!-- 
sara's code pen: https://codepen.io/sarabeth-russert/pen/mdRBvbG -->

## Functions
- new datatype
- a group of statements that perform a task or calculate a value, stored within a structure that prevents them from from occuring until the function is 'called' aka 'invoked'

### why?
- functions are reusable
- make code dry
- prevent bugs

pour ingredients into a bowl
mix the ingredients for 3 min
pour the batter into a pan
bake for 40 min at 350

do that again^

```js
  function bakeACake() {
    pour ingredients into a bowl
    mix the ingredients for 3 min
    pour the batter into a pan
    bake for 40 min at 350
  }
```
bakeACake()

bakeACake()

bakeACake()

bakeACake()
