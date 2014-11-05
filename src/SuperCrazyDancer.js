var SuperCrazyDancer= function (tag, top, left) {
  this.$node =  tag;
  this.setPosition(top, left);
  this.xPosition = left;
  this.yPosition = top;
}

SuperCrazyDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
SuperCrazyDancer.prototype.lineUp= function () {
  var pos= {
    'position':'absolute',
    'top':'400px'
  };
  this.$node.css(pos);
}
