$(".icon-scroll").click(function() {
    var cls = $('.container').offset().top;
    $("html, body").animate({scrollTop: cls}, "slow");
});