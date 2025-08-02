// JavaScript Document
$(document).ready(function () {
  $("#bat-tat-menu").click(function () {
    $(".menu").slideToggle();
  });
});

new WOW().init();

var typed = new Typed(".element", {
  strings: ["Graphic Designer.", "UX/UI Designer.", "Photographer."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// SMOOTH SCROLLING SECTIONS
$("a[href*=#]:not([href=#])").click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") ||
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  }
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
