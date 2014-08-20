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
    deck.slides.forEach(function(slide, index){
      var timelinePiece = document.createElement('div');
      timelinePiece.className = 'year';
      var link = document.createElement('a');
      console.dir(slide);
      var href = slide.dataset.bespokeHash ? slide.dataset.bespokeHash : index;
      link.href = '#' + href;
      link.className = 'timeline-link';
      link.innerText = slide.getElementsByTagName('h1')[0].innerText;
      timelinePiece.style.left = getSlideOffset(slide) + '%';
      timelinePiece.appendChild(link);
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
