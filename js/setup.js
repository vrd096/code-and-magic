"use strict";

var WIZARD_NAMES = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон"
];
var WIZARD_SURNAMES = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг"
];
var COLORS_COAT = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb((0, 0, 0)"
];
var EYES_COLOR = ["black", "red", "blue", "yellow", "green"];


var randomat = function(param) {
  var randomParam = param[Math.floor(Math.random() * param.length)];
  return randomParam;
};

var wizards = [
  {
    name: function() {
      return randomat(WIZARD_NAMES) + " " + randomat(WIZARD_SURNAMES);
    },
    coatColor: function() {
      return randomat(COLORS_COAT);
    },
    eyesColor: function() {
      return randomat(EYES_COLOR);
    }
  },
  {
    name: function() {
      return randomat(WIZARD_NAMES) + " " + randomat(WIZARD_SURNAMES);
    },
    coatColor: function() {
      return randomat(COLORS_COAT);
    },
    eyesColor: function() {
      return randomat(EYES_COLOR);
    }
  },
  {
    name: function() {
      return randomat(WIZARD_NAMES) + " " + randomat(WIZARD_SURNAMES);
    },
    coatColor: function() {
      return randomat(COLORS_COAT);
    },
    eyesColor: function() {
      return randomat(EYES_COLOR);
    }
  },
  {
    name: function() {
      return randomat(WIZARD_NAMES) + " " + randomat(WIZARD_SURNAMES);
    },
    coatColor: function() {
      return randomat(COLORS_COAT);
    },
    eyesColor: function() {
      return randomat(EYES_COLOR);
    }
  }
];

var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");
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
var FIREBALL = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
var similarListElement = document.querySelector(".setup-similar-list");
similarListElement.appendChild(fragment);
var editWizard = document.querySelector(".setup-wizard");
var editWizardCoat = editWizard.querySelector(".wizard-coat");
editWizardCoat.addEventListener("click", function() {
  editWizardCoat.style.fill = randomat(COLORS_COAT);
});
var editWizardEyes = editWizard.querySelector(".wizard-eyes");
editWizardEyes.addEventListener("click", function() {
  editWizardEyes.style.fill = randomat(EYES_COLOR);
});
var editFireball = document.querySelector(".setup-fireball-wrap");
var editFireballInput = editFireball.querySelector("input");

editFireball.addEventListener("click", function() {
  editFireball.style.background = randomat(FIREBALL);
  console.log(editFireball.style.background);
  editFireballInput.value = editFireball.style.background;
});

document.querySelector(".setup-similar").classList.remove("hidden");
