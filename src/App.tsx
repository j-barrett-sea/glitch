//   TRANSFORMING JS OBJECTS
//   Implement a function that takes an arbitrary nested JS Object and does the following transformations:

// - add +1 to each Number within in Object (eg: x: 9 => x: 10)
// - add ‘SEA’ to each String within in Object (eg: y: ‘abc’ => y: ‘abc SEA’)
// - The object should keep its original structure!
// - Log the result to the browser console or Dom or write as a test

//   initial object
//   {                  ||      {
//     a: 123,          ||          a: ‘def’,
//     b: 'abc'         ||          b: [789],
//     c: [1, 2, 3]     ||          c: 456
//   }                  ||      }
// ==============================================
//   resulting object
//   {                  ||      {
//     a: 124,          ||          a: ‘def SEA’,
//     b: 'abc AE'      ||          b: [8910],
//     c: [2, 3, 4]     ||          c: [3, 4, 5]
//   }                  ||      }


import React from 'react';

export default function App() {
  return (
    <>
      <p>Hello</p>
    </>
  );
}
