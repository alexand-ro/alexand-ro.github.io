$('.icon-scroll').click(function () {
  var cls = $('.article-content').offset().top;
  $('html, body').animate({ scrollTop: cls }, 'slow');
});

// Update the year dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();
