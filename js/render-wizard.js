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
  var editFireballInput = editFireball.querySelector("input");

  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    for (var i = 0; i < wizards.length; i++) {
      wizardElement.querySelector(".setup-similar-label").textContent = wizards[
        i
      ].name();
      wizardElement.querySelector(".wizard-coat").style.fill = wizards[
        i
      ].coatColor();
      wizardElement.querySelector(".wizard-eyes").style.fill = wizards[
        i
      ].eyesColor();
    }
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);

  editWizardCoat.addEventListener("click", function() {
    editWizardCoat.style.fill = randomat(COLORS_COAT);
  });

  editWizardEyes.addEventListener("click", function() {
    editWizardEyes.style.fill = randomat(EYES_COLOR);
  });

  editFireball.addEventListener("click", function() {
    editFireball.style.background = randomat(FIREBALL);
    console.log(editFireball.style.background);
    editFireballInput.value = editFireball.style.background;
  });
})();
