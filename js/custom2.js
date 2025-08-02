// JavaScript Document
$("#banner").owlCarousel({
  loop: true, // cho lap lại
  items: 1, // xuất hiện 1 ảnh thôi
  smartSpeed: 1000, // tốc độ thay đổi ảnh
  autoplay: true, // cho phép tự động chạy
  autoplayTimeout: 5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
  nav: true, // cho xuất hiện bộ nút tới lui
});

$("#banner2").owlCarousel({
  loop: true, // cho lap lại
  items: 1, // xuất hiện 1 ảnh thôi
  smartSpeed: 1000, // tốc độ thay đổi ảnh
  autoplay: true, // cho phép tự động chạy
  autoplayTimeout: 5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
  nav: true, // cho xuất hiện bộ nút tới lui
});

$("#tes").owlCarousel({
  loop: true,
  margin: 80,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      dots: false,
      nav: true,
    },
    1000: {
      items: 3,
    },
  },
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
