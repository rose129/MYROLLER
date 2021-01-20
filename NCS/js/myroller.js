var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }

    $('a.page-scroll').bind('click', function(event) {
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: ($($anchor.attr('href')).offset().top - 50)
       }, 1250, 'easeInOutExpo');
       event.preventDefault();
   });

});

$(document).ready(function(){

   var naviData = [
                   ["#pro","구매하기"],
                   ["#event","이벤트"],
                   ["#youtube","홈트레이닝"],
                   ["#FAQ","FAQ"],
                  ];
  var naviTag = "";
   for(var m = 0; m < naviData.length; m++){
       naviTag += "<li><a href="+naviData[m][0]+"> "+naviData[m][1]+" </a></li>";
       $("#gnb").html(naviTag);

   }
});
