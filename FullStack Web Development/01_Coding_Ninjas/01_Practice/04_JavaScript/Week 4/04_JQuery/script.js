// const para1 = document.getElementById('para1');
// para1.innerHTML = "Welcome";

// $('#para2').html('Welcome');

$("p").css({
  fontSize: "30px",
  color: "grey",
});

$("div").css({
  width: "100px",
  height: "100px",
  backgroundColor: "cyan",
});

// $("div").click(function () {
//   alert("Div Clicked");
// });

$("div").on("click", function () {
  const ele = $(this);
  ele.width(ele.width() + 10 + "px");
//   alert("Div Clicked");
});

$("a").on("click", function (event) {
  event.preventDefault();
  alert("Anchor tag Clicked");
});
