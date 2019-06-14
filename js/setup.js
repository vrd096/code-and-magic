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
      popupClose();
    }
  }
};

var popupOpen = function() {
  setup.classList.remove("hidden");
  document.addEventListener("keydown", onPopupEscPress);
};

var popupClose = function() {
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
  popupClose();
});
setupClose.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupClose();
  }
});

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
var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

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
document.querySelector(".setup-similar").classList.remove("hidden");
