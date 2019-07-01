"use strict";

(function() {
  var setup = document.querySelector(".setup");
  var userNameInput = setup.querySelector(".setup-user-name");

  userNameInput.addEventListener("invalid", function() {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity(
        "Имя должно состоять минимум из 2-х символов"
      );
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity("Имя не должно превышать 25-ти символов");
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity("Обязательное поле");
    } else {
      userNameInput.setCustomValidity("");
    }
  });

  var form = document.querySelector(".setup-wizard-form");

  form.addEventListener("submit", function(evt) {
    window.save(new FormData(form), window.popupClose, window.errorHandler);
    evt.preventDefault();
  });
})();
