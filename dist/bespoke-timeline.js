/*!
 * bespoke-timeline v0.0.0
 *
 * Copyright 2014, 
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var o=n;o=o.bespoke||(o.bespoke={}),o=o.plugins||(o.plugins={}),o.timeline=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function(options) {
  // If you want options, they should be passed in here.
  // https://github.com/markdalgleish/bespoke.js#plugins-with-options

  return function(deck) {
    // Use the 'deck' instance to interact with the presentation.
    // https://github.com/markdalgleish/bespoke.js#deck-instances

    var yearsVisible = options || 10;
    
    var getSlideOffset = function(slide){
      var difference = getDate(slide) - getDate(deck.slides[0]);
      var offset = (difference*100)/yearsVisible;
      return offset;
    };

    var getDate = function(slide){
      return parseInt(slide.dataset.bespokeDate, 10);
    };

    var timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';
    deck.slides.forEach(function(slide){
      var timelinePiece = document.createElement('div');
      timelinePiece.className = 'year';
      timelinePiece.innerText = slide.getElementsByTagName('h1')[0].innerText;
      timelinePiece.style.left = getSlideOffset(slide) + '%';
      timelineContainer.appendChild(timelinePiece);
    });
    deck.parent.appendChild(timelineContainer);
    
    deck.on('activate', function(e){
      console.dir(timelineContainer);
      var offset = getSlideOffset(e.slide);
      offset = offset*-1+50;
      timelineContainer.style.left = offset + '%';
    });
  };
};

},{}]},{},[1])
(1)
});