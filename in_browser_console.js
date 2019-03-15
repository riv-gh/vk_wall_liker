function scrollToElement(theElement,height=0) {
    var selectedPosX = 0;
    var selectedPosY = 0;
    while (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }
    window.scrollTo(selectedPosX,selectedPosY-height);
}

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

function liker() {
  try {
  var tmp = document.querySelector('.box_title');
  if (!tmp) {
    var element = document.querySelector('div.wall_text+div.like_wrap>div.like_cont>div.like_btns>a._like:not(.active):not(.empty)')
    scrollToElement(element,600);
    
    console.log('like!');
    eval(element.getAttribute('onclick'));
    
    
  }
  else {
    console.log('scroll!');
    window.scrollTo(0,document.body.clientHeight);
  }
  }
  catch(e) { }
  setTimeout(function(){
      liker();
    },randomInteger(1010,5349));
}

liker();
