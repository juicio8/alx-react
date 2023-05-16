import $ from "jquery";
import _ from "lodash";
$(document).ready(() => {
  $("body").append(
    '<p>Holberton Dashboard</p><p>Dashboard data for the students</p><button>Click here to get started</button><p id="count"></p><p>Copyright - Holberton School</p>'
  );
  function updateCounter() {
    console.log("clicked");
    let countText = $("#count").text();
    let count;
    if (countText.length > 0) {
      count = Number(countText.split(" ")[0]);
      count++;
    } else {
      count = 1;
    }
    console.log(count);
    $("#count").text(`${count} clicks on the button`);
  }
  $("button").click(_.debounce(updateCounter, 500));
});
