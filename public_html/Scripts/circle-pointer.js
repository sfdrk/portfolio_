$(document).on("click mousemove",".main-page",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x / 10;
    var newposY = y / 10; 
    $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});