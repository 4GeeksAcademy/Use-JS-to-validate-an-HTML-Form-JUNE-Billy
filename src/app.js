/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("paymentForm");
  const alertDiv = document.getElementById("alertDiv");

  form.addEventListener(
    "submit",
    function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alertDiv.style.display = "block";
      } else {
        alertDiv.style.display = "none";
      }

      form.classList.add("was-validated");
    },
    false
  );

  form.addEventListener("input", function() {
    if (form.checkValidity()) {
      alertDiv.style.display = "none";
    }
  });
});
