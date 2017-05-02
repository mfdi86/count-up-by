$ ( document ).ready(function() {
  $('#counting').submit(function(event){
    event.preventDefault();
    var stop1 = parseInt($("#stop1").val());
    var mult1 = parseInt($("#mult1").val());
    for (var index = 0; index <= stop1 ; index += mult1) {
    }
    alert();
  })
});
