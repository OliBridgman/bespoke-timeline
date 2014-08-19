Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke');
var timeline = require('../../lib-instrumented/bespoke-timeline.js');

describe("bespoke-timeline", function() {

  var deck,

    createDeck = function() {
      var parent = document.createElement('article');
      for (var i = 0; i < 10; i++) {
        var section = document.createElement('section');
        section.setAttribute('data-bespoke-date', i);
        section.appendChild(document.createElement('h1'));
        parent.appendChild(section);
      }

      deck = bespoke.from(parent, [
        timeline()
      ]);
    };

  beforeEach(createDeck);

  describe("deck.slide", function() {

    beforeEach(function() {
      deck.slide(0);
    });

    it("should have a date", function() {
      expect(deck.slides[0].dataset.bespokeDate).toBe("0");
    });

  });

});
