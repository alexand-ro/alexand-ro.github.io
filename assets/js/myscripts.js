$('.icon-scroll').click(function () {
  var cls = $('.article-content').offset().top;
  $('html, body').animate({ scrollTop: cls }, 'slow');
});

// Update the year dynamically
var currentYear = document.getElementById('current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();
