"use strict";
(function() {
  window.WIZARD_NAMES = [
    "Иван",
    "Хуан Себастьян",
    "Мария",
    "Кристоф",
    "Виктор",
    "Юлия",
    "Люпита",
    "Вашингтон"
  ];
  window.WIZARD_SURNAMES = [
    "да Марья",
    "Верон",
    "Мирабелла",
    "Вальц",
    "Онопко",
    "Топольницкая",
    "Нионго",
    "Ирвинг"
  ];
  window.COLORS_COAT = [
    "rgb(101, 137, 164)",
    "rgb(241, 43, 107)",
    "rgb(146, 100, 161)",
    "rgb(56, 159, 117)",
    "rgb(215, 210, 55)",
    "rgb((0, 0, 0)"
  ];
  window.EYES_COLOR = ["black", "red", "blue", "yellow", "green"];

  window.wizards = [
    {
      name: function() {
        return randomString(WIZARD_NAMES) + " " + randomString(WIZARD_SURNAMES);
      },
      coatColor: function() {
        return randomString(COLORS_COAT);
      },
      eyesColor: function() {
        return randomString(EYES_COLOR);
      }
    },
    {
      name: function() {
        return randomString(WIZARD_NAMES) + " " + randomString(WIZARD_SURNAMES);
      },
      coatColor: function() {
        return randomString(COLORS_COAT);
      },
      eyesColor: function() {
        return randomString(EYES_COLOR);
      }
    },
    {
      name: function() {
        return randomString(WIZARD_NAMES) + " " + randomString(WIZARD_SURNAMES);
      },
      coatColor: function() {
        return randomString(COLORS_COAT);
      },
      eyesColor: function() {
        return randomString(EYES_COLOR);
      }
    },
    {
      name: function() {
        return randomString(WIZARD_NAMES) + " " + randomString(WIZARD_SURNAMES);
      },
      coatColor: function() {
        return randomString(COLORS_COAT);
      },
      eyesColor: function() {
        return randomString(EYES_COLOR);
      }
    }
  ];
})();
