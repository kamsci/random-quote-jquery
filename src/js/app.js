$(document).ready(function() {
// anything that changes elements goes in here

// Use JQuery
// generate a random quote and display

// create array with quotes

var coolQuotes = [
  "Do not dwell in the past",
  "Life is simple, but we insist on making it complicated",
  "Life is not  just about finding yourself. Life is about creating yourself",
  "Happiness is a concious effort",
  "The best preperation for tomorrow is doing your best today",
  "You might not be able to adjust hte direction of the wind, but you can adjust your sails",
  "Just Do It",
  "1 oz prevention is better than 1oz cure",
  "Happy Happy Quote Quote"
  ];

console.log(coolQuotes);
// create random number
function createRandomNum() {
  return Math.floor(Math.random() * coolQuotes.length); //length of array.length
}
// var randomNum = createRandomNum();
// console.log(randomNum);
// access a quote
function displayQuote(index) {
  $('#myQuote').text(coolQuotes[index]);
  console.log(index);
}

// on click, clear display and display quote
  $('#ask').click(function() {
    displayQuote(createRandomNum());
  });

}); // end ready function
