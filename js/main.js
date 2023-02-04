$(document).ready(function () {
  var $overlay = $(".overlay");
  var $register = $(".register");
  var $phone = $(".phone");
  var $buttonPhone = $(".container .btn");
  var $close = $(".close-btn");

  $buttonPhone.click(function (e) {
    $overlay.css({
      display: "block",
    });
    $register.css({
      transform: "translate(-50%, 0%)",
      top: "35%",
    });
    $phone.html(e.target.getAttribute("data-phone"));
  });

  $close.click(function () {
    $overlay.css({
      display: "none",
    });

    $register.css({
      transform: "translate(-50%, -250%)",
      top: "35%",
    });
  });
});
