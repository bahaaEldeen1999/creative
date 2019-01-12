// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
//end smooth scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').css({
            backgroundColor: '#222222'
        });
        $('.navbar-nav').css({
            padding: '0'
        });
    }else{
       $('.navbar').css({
            backgroundColor: 'transparent'
        });
        $('.navbar-nav').css({
            padding: '10px 10px 0'
        });
    };
});
window.sr = ScrollReveal();
sr.reveal('h1', {
    duration:600,
    origin: 'left',
    distance:'100px'
});
sr.reveal('h3,h2', {
    duration:600,
    origin: 'right',
    distance:'100px'
});
sr.reveal('p', {
    duration:600,
    origin: 'bottom',
    distance:'100px'
});
sr.reveal('.col-md-3,.col-md-4,.col-md-12', {
    duration:600,
    origin: 'bottom',
    distance:'100px'
});
sr.reveal('footer p', {
    duration:600,
    origin: 'left',
    distance:'100px'
});