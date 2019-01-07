console.log("jquery");
import $ = require("jquery");

$("button").click(function() {
  console.log("button was clicked");
  alert("button was clicked");
});

$("button").css({ "background-color": "green" });
$("div").css({ "background-color": "blue" });
