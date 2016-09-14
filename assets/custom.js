/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.site-wrapper').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-inverse .navbar-brand').addClass("scrolled");
        $('.navbar-inverse .navbar-nav>li>a').addClass("scrolled");
    }else{
      $('.navbar-inverse .navbar-brand').removeClass("scrolled");
      $('.navbar-inverse .navbar-nav>li>a').removeClass("scrolled");
    }
}

$(".navbar-inverse a.navbar-brand").hover(function() {
  $(this).text("P C");
}, function() {
  $(this).text("p c");
});

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}