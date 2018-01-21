(function() {
  "use strict";

  function init() {
    var alertButton = document.getElementById('alert-button');
    var incrementButton = document.getElementById('increment-button');
    var appendButton = document.getElementById('append-button');

    alertButton.onclick = alertNumber;
    incrementButton.onclick = incrementNumber;
    appendButton.onclick = appendNumber;
  }

  // Displays an alert popup with the current value of the number in the header
  function alertNumber() {
    // gets the text inside the header element
    var headerNumber = document.getElementsByTagName('header')[0].innerHTML;

    // displays the popup with the number
    alert(headerNumber);
  }

  // Increments the number in the header
  function incrementNumber() {
    // header element
    var header = document.getElementsByTagName('header')[0];
    // gets the number inside the header
    var headerNumber = parseInt(header.innerHTML);

    // increments the number in the header element
    header.innerHTML = ++headerNumber;
  }

  // Appends a new paragraph to the page containing the number in the header
  function appendNumber() {
    // gets the text inside the header element
    var headerNumber = document.getElementsByTagName('header')[0].innerHTML;
    // creates a new paragraph element
    var newP = document.createElement('p');
    // sets the text inside the new paragraph to be the current header number
    newP.innerHTML = headerNumber;

    // appends the new paragraph element to the body
    document.body.appendChild(newP);
  }

  // sets up the button events when the page is loaded
  window.addEventListener('load', init);
})();
