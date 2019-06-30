"use strict";

(function() {
  var similarWizardTemplate = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");
  var FIREBALL = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
  var similarListElement = document.querySelector(".setup-similar-list");
  var editWizard = document.querySelector(".setup-wizard");
  var editWizardCoat = editWizard.querySelector(".wizard-coat");
  var editWizardEyes = editWizard.querySelector(".wizard-eyes");
  var editFireball = document.querySelector(".setup-fireball-wrap");

  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(".setup-similar-label").textContent =
      wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
    // for (var i = 0; i < window.wizards.length; i++) {
    //   wizardElement.querySelector(
    //     ".setup-similar-label"
    //   ).textContent = window.wizards[i].name();
    //   wizardElement.querySelector(".wizard-coat").style.fill = window.wizards[
    //     i
    //   ].coatColor();
    //   wizardElement.querySelector(".wizard-eyes").style.fill = window.wizards[
    //     i
    //   ].eyesColor();
    // }
    return wizardElement;
  };

  var successHandler = function(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector(".setup-similar").classList.remove("hidden");
  };

  var errorHandler = function(errorMessage) {
    var node = document.createElement("div");
    node.style =
      "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = "30px";

    node.textContent = errorMessage;
    document.body.insertAdjacentElement("afterbegin", node);
  };
  window.load(successHandler, errorHandler);

  // editWizardCoat.addEventListener("click", function() {
  //   editWizardCoat.style.fill = randomString(window.COLORS_COAT);
  // });

  // editWizardEyes.addEventListener("click", function() {
  //   editWizardEyes.style.fill = randomString(window.EYES_COLOR);
  // });

  // editFireball.addEventListener("click", function() {
  //   editFireball.style.background = randomString(FIREBALL);
  //   console.log(editFireball.style.background);
  //   editFireballInput.value = editFireball.style.background;
  // });
})();
