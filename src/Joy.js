var Joy= function (tag, top, left) {
  this.$node=$(tag);
  this.setPosition(top, left);
}

Joy.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
