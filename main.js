$(function () {
  console.log("Document ready");

  // Navbar behavior
  let lastScrollTop = 0;
  let navbar = $(".custom-navbar");
  let idleTimer;
  const idleTimeout = 3000; // 3 seconds

  $(window).on("scroll", function () {
    let st = $(this).scrollTop();
    console.log("Scroll event", st);
    if (st > lastScrollTop) {
      if (!navbar.hasClass("hidden")) {
        navbar.addClass("hidden"); // Hide the navbar
        console.log("Navbar hidden");
      }
    } else {
      if (navbar.hasClass("hidden")) {
        navbar.removeClass("hidden"); // Show the navbar
        console.log("Navbar shown");
      }
    }
    lastScrollTop = st;

    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (navbar.hasClass("hidden")) {
        navbar.removeClass("hidden"); // Show the navbar after idle timeout
        console.log("Navbar shown after idle");
      }
    }, idleTimeout);
  });
  $(document).on("mousemove keydown", function () {
    console.log("Activity detected");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (navbar.hasClass("hidden")) {
        navbar.removeClass("hidden"); // Show the navbar after idle timeout
        console.log("Navbar shown after idle");
      }
    }, idleTimeout);
  });
});
$(function () {
  // Review slider behavior
  $(document).ready(function () {
    $(".review-slider-container").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true,
      pauseOnHover: true,
      infinite: true,
      appendDots: $(".review-slider-container"), // Append dots to the slider container
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
});
