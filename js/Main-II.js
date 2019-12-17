document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

$(document).ready(function() {
  $('.carousel').carousel();
});

// card slider
$('.carousel-slider').carousel(
  { fullWidth: true, padding: 0 },
  setTimeout(autoplay, 4500)
);
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 7500);
}

// Floating Action Button

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left'
  });
});
