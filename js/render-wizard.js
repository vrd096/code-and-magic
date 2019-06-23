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

  var renderWizard = function() {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    for (var i = 0; i < window.wizards.length; i++) {
      wizardElement.querySelector(
        ".setup-similar-label"
      ).textContent = window.wizards[i].name();
      wizardElement.querySelector(".wizard-coat").style.fill = window.wizards[
        i
      ].coatColor();
      wizardElement.querySelector(".wizard-eyes").style.fill = window.wizards[
        i
      ].eyesColor();
    }
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.wizards.length; i++) {
    fragment.appendChild(renderWizard(window.wizards[i]));
  }

  similarListElement.appendChild(fragment);

  editWizardCoat.addEventListener("click", function() {
    editWizardCoat.style.fill = randomString(window.COLORS_COAT);
  });

  editWizardEyes.addEventListener("click", function() {
    editWizardEyes.style.fill = randomString(window.EYES_COLOR);
  });

  editFireball.addEventListener("click", function() {
    editFireball.style.background = randomString(FIREBALL);
    console.log(editFireball.style.background);
    editFireballInput.value = editFireball.style.background;
  });
  document.querySelector(".setup-similar").classList.remove("hidden");
})();
