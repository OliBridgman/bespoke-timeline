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
