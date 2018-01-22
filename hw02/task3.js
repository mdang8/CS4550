(function() {
  "use strict";

  // Initial function to call when the page is loaded
  function init() {
    var loremIpsumLink = document.getElementById('lorem-ipsum-link');
    var nnBottlesLink = document.getElementById('nn-bottles-link');
    var lastThingLink = document.getElementById('last-thing-link');

    loremIpsumLink.onclick = loremIpsum;
    nnBottlesLink.onclick = nnBottles;
    lastThingLink.onclick = lastThing;
  }

  // Changes the right column paragraph text to be four paragraphs of Lorem Ipsum
  function loremIpsum() {
    // clears the other text
    document.getElementById('right-column-text').innerHTML = '';
    // displays the default Lorem Ipsum text
    document.querySelectorAll('.default-text').forEach((element, i) => {
        element.style.display = 'block';
    });
  }

  // Changes the right column paragraph text to be the first four verses of "99 Bottles of Beer"
  function nnBottles() {
    // hides the default text if it's displayed
    if (document.querySelectorAll('.default-text')[0].style.display != 'none') {
      document.querySelectorAll('.default-text').forEach((element, i) => {
        element.style.display = 'none';
      });
    }

    // paragraph element in the right column
    var columnText = document.getElementById('right-column-text');
    // template string of the 99 Bottles text
    // (lyrics from http://www.99-bottles-of-beer.net/lyrics.html)
    var nnBottlesText = `99 bottles of beer on the wall, 99 bottles of beer.<br>
        Take one down and pass it around, 98 bottles of beer on the wall.<br><br>
        98 bottles of beer on the wall, 98 bottles of beer.<br>
        Take one down and pass it around, 97 bottles of beer on the wall.<br><br>
        97 bottles of beer on the wall, 97 bottles of beer.<br>
        Take one down and pass it around, 96 bottles of beer on the wall.<br><br>
        96 bottles of beer on the wall, 96 bottles of beer.<br>
        Take one down and pass it around, 95 bottles of beer on the wall.`;

    // sets the text inside the right column paragraph to be the 99 Bottles text
    columnText.innerHTML = nnBottlesText;
  }

  // Changes the right column paragraph text to be "this is the third thing"
  function lastThing() {
    // hides the default text if it's displayed
    if (document.querySelectorAll('.default-text')[0].style.display != 'none') {
      document.querySelectorAll('.default-text').forEach((element, i) => {
        element.style.display = 'none';
      });
    }

    // paragraph element in the right column
    var columnText = document.getElementById('right-column-text');
    // the Last Thing text
    var lastThingText = 'this is the third thing';

    // sets the text inside the right column paragraph to be the Last Thing text
    columnText.innerHTML = lastThingText;
  }

  // sets up the link events when the page is loaded
  window.addEventListener('load', init);
})();
