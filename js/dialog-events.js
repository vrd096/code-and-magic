"use strict";

(function() {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector(".setup");
  var setupOpen = document.querySelector(".setup-open");
  var setupClose = document.querySelector(".setup-close");
  var userNameInput = setup.querySelector(".setup-user-name");

  var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (evt.target === userNameInput) {
        evt.stopPropagation();
      } else if (evt.target !== userNameInput) {
        window.popupClose();
      }
    }
  };

  var popupOpen = function() {
    setup.classList.remove("hidden");
    document.addEventListener("keydown", onPopupEscPress);
  };

  window.popupClose = function() {
    setup.classList.add("hidden");
    document.removeEventListener("keydown", onPopupEscPress);
  };

  setupOpen.addEventListener("click", function() {
    popupOpen();
  });

  setupOpen.addEventListener("keydown", function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      popupOpen();
    }
  });

  setupClose.addEventListener("click", function() {
    window.popupClose();
  });
  setupClose.addEventListener("keydown", function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.popupClose();
    }
  });
})();
