(function() {
  "use strict";

  function init() {
    var loremIpsumLink = document.getElementById('lorem-ipsum-link');
    var nnBottlesLink = document.getElementById('nn-bottles-link');
    var lastThingLink = document.getElementById('last-thing-link');

    loremIpsumLink.onclick = loremIpsum;
    nnBottlesLink.onclick = nnBottles;
    lastThingLink.onclick = lastThing;

    var loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas lobortis erat mi, sed commodo nulla vestibulum vitae.
        Proin libero leo, aliquet vel dolor at, placerat tempus est.
        Nulla eu tortor vel turpis elementum tristique.
        Etiam at tellus nisi. Vivamus pharetra imperdiet laoreet.
        Quisque venenatis semper nisi sed sollicitudin.
        Etiam egestas ultricies tortor, eget molestie orci tempus sit amet.
        Praesent felis elit, bibendum posuere justo sed, mattis aliquet ante.
        Nam vehicula ipsum nec elit tempor finibus.
        Phasellus dictum, lorem in malesuada semper, metus risus placerat tellus, sed cursus mauris sem laoreet mauris.<br><br>
        Praesent urna magna, laoreet ac tellus ut, accumsan vulputate arcu.
        Suspendisse luctus lectus est, eget bibendum est accumsan eu.
        Donec eget mi diam. Nulla facilisi.
        Aenean tortor lectus, elementum quis massa laoreet, consequat imperdiet sem.
        Nunc scelerisque accumsan arcu, a auctor turpis scelerisque in.
        Aliquam facilisis nibh massa, eget commodo dui molestie ut.
        Nullam elit quam, auctor vitae lacus vel, condimentum volutpat quam.
        In pretium luctus orci et lacinia.
        Donec ultricies tellus eu eros vestibulum vulputate.
        Duis semper eros et ante mattis elementum.<br><br>
        In elit leo, consequat ut pharetra eget, cursus et leo.
        Ut eget pretium elit.
        Donec commodo elit vitae dui ultricies auctor.
        Suspendisse quis justo a erat consectetur sodales vitae eget purus.
        Integer eu odio sit amet orci facilisis pulvinar.
        Nunc sed neque arcu.
        Fusce vitae ornare sapien.
        Phasellus in blandit ipsum, id consequat massa.
        Quisque elementum libero nec sagittis ornare.
        Donec luctus, urna eget accumsan semper, nulla ligula euismod odio, dignissim tempor magna metus nec nunc.<br><br>
        Nulla mi tortor, maximus et ullamcorper sed, sollicitudin sit amet lorem.
        Nulla maximus tempus dictum.
        Nunc pellentesque purus sem, non posuere quam convallis sed.
        Aliquam magna quam, auctor sed tristique eget, faucibus quis ante.
        In faucibus sed quam eget pellentesque. Nunc dapibus consectetur commodo.
        Sed consectetur commodo dolor, id maximus nisi cursus nec.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Ut dapibus in arcu eget consectetur.
        Nam aliquet lectus ac varius varius.
        Duis pulvinar nibh vitae leo blandit sollicitudin.`;

    document.getElementById('right-column-text').innerHTML = loremIpsumText;
  }

  function loremIpsum() {
    // paragraph element in the right column
    var columnText = document.getElementById('right-column-text');
    var loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas lobortis erat mi, sed commodo nulla vestibulum vitae.
        Proin libero leo, aliquet vel dolor at, placerat tempus est.
        Nulla eu tortor vel turpis elementum tristique.
        Etiam at tellus nisi. Vivamus pharetra imperdiet laoreet.
        Quisque venenatis semper nisi sed sollicitudin.
        Etiam egestas ultricies tortor, eget molestie orci tempus sit amet.
        Praesent felis elit, bibendum posuere justo sed, mattis aliquet ante.
        Nam vehicula ipsum nec elit tempor finibus.
        Phasellus dictum, lorem in malesuada semper, metus risus placerat tellus, sed cursus mauris sem laoreet mauris.<br><br>
        Praesent urna magna, laoreet ac tellus ut, accumsan vulputate arcu.
        Suspendisse luctus lectus est, eget bibendum est accumsan eu.
        Donec eget mi diam. Nulla facilisi.
        Aenean tortor lectus, elementum quis massa laoreet, consequat imperdiet sem.
        Nunc scelerisque accumsan arcu, a auctor turpis scelerisque in.
        Aliquam facilisis nibh massa, eget commodo dui molestie ut.
        Nullam elit quam, auctor vitae lacus vel, condimentum volutpat quam.
        In pretium luctus orci et lacinia.
        Donec ultricies tellus eu eros vestibulum vulputate.
        Duis semper eros et ante mattis elementum.<br><br>
        In elit leo, consequat ut pharetra eget, cursus et leo.
        Ut eget pretium elit.
        Donec commodo elit vitae dui ultricies auctor.
        Suspendisse quis justo a erat consectetur sodales vitae eget purus.
        Integer eu odio sit amet orci facilisis pulvinar.
        Nunc sed neque arcu.
        Fusce vitae ornare sapien.
        Phasellus in blandit ipsum, id consequat massa.
        Quisque elementum libero nec sagittis ornare.
        Donec luctus, urna eget accumsan semper, nulla ligula euismod odio, dignissim tempor magna metus nec nunc.<br><br>
        Nulla mi tortor, maximus et ullamcorper sed, sollicitudin sit amet lorem.
        Nulla maximus tempus dictum.
        Nunc pellentesque purus sem, non posuere quam convallis sed.
        Aliquam magna quam, auctor sed tristique eget, faucibus quis ante.
        In faucibus sed quam eget pellentesque. Nunc dapibus consectetur commodo.
        Sed consectetur commodo dolor, id maximus nisi cursus nec.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Ut dapibus in arcu eget consectetur.
        Nam aliquet lectus ac varius varius.
        Duis pulvinar nibh vitae leo blandit sollicitudin.`;

    // sets the text inside the right column paragraph to be the four Lorem Ipsum paragraphs
    columnText.innerHTML = loremIpsumText;
  }

  function nnBottles() {
    // paragraph element in the right column
    var columnText = document.getElementById('right-column-text');
    var nnBottlesText = `99 bottles of beer on the wall, 99 bottles of beer.<br>
        Take one down and pass it around, 98 bottles of beer on the wall.<br><br>
        98 bottles of beer on the wall, 98 bottles of beer.<br>
        Take one down and pass it around, 97 bottles of beer on the wall.<br><br>
        97 bottles of beer on the wall, 97 bottles of beer.<br>
        Take one down and pass it around, 96 bottles of beer on the wall.<br><br>
        96 bottles of beer on the wall, 96 bottles of beer.<br>
        Take one down and pass it around, 95 bottles of beer on the wall.`;

    columnText.innerHTML = nnBottlesText;
  }

  function lastThing() {
    // paragraph element in the right column
    var columnText = document.getElementById('right-column-text');
    var lastThingText = 'this is the third thing';

    columnText.innerHTML = lastThingText;
  }

  window.addEventListener('load', init);
})();
