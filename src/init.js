$(document).ready(function(){
  window.dancers = [];
  window.customDancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

$(".addJoyItem").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var customDancer = new dancerMakerFunction(
      $('<span class="joy1"></span>'),
      $("body").height() * Math.random(),
      $("body").width() * Math.random()

    );
    $('body').append(customDancer.$node);
    window.dancers.push(customDancer);
  });

$(".addSuperCrazyDancer").on("click", function(event){
    var something =  $('<span class="crzyDancer"></span>').animate({
    opacity:'1',
    height:'497px',
    width:'350px'
  });
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var customCrazyDancer = new dancerMakerFunction(
   something,
      $("body").height() * Math.random(),
      $("body").width() * Math.random()

    );

    $('body').append(customCrazyDancer.$node);
    window.dancers.push(customCrazyDancer);
  });


$(".addSuperCrazyDancer2").on("click", function(event){
    var something =  $('<span class="crzyDancer2"></span>').animate({
    opacity:'1',
    height:'380px',
    width:'264px'
  });
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var customCrazyDancer = new dancerMakerFunction(
   something,
      $("body").height() * Math.random(),
      $("body").width() * Math.random()

    );

    $('body').append(customCrazyDancer.$node);
    window.dancers.push(customCrazyDancer);
  });


$(".addSuperCrazyDancer3").on("click", function(event){
    var something =  $('<span class="crzyDancer3"></span>').animate({
    opacity:'1',
    height:'610px',
    width:'500px'
  });
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var customCrazyDancer = new dancerMakerFunction(
   something,
      $("body").height() * Math.random(),
      $("body").width() * Math.random()

    );

    $('body').append(customCrazyDancer.$node);
    window.dancers.push(customCrazyDancer);
  });




$(".lineThemUp").on("click", function(event){
  for(var i=0; i<window.dancers.length;i++) {
    window.dancers[i].lineUp();
  }
  });
});

$('.joy1').on("click",function(event){
  for(var i=1;i<window.dancer.length;i++) {
  window.dancer[i-1].setPosition(window.dancer[i].xyposition-10, window.dancer[i].xyposition+10);
  }
})

