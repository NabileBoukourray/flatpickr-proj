import "jquery";
import "popper.js";
import "bootstrap";
import "./x-flatpickr";

$("#form_id").submit(function (event) {
    console.log("start : " + start);
    console.log("end : " + end);
    event.preventDefault();
});

