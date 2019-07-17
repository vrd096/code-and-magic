"use strict";

(function() {
  // var FIREBALL = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
  // var similarListElement = document.querySelector(".setup-similar-list");

  // var editFireball = document.querySelector(".setup-fireball-wrap");
  var coatColor;
  var eyesColor;
  var wizards = [];

  function getRank() {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank +=2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank +=1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {

    renderWizard(wizards.sort(function (left, right){
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));

    // var sameCoatAndEyesWizards = wizards.filter(function(it){
    //   return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    // });
    
    // var sameCoatWizards = wizards.filter(function(it){
    //   return it.colorCoat === coatColor;
    // });
    // var sameEyesWizards = wizards.filter(function(it){
    //   return it.colorEyes === eyesColor;
    // });
    // var filterWizards = sameCoatAndEyesWizards;
    // filterWizards = filterWizards.concat(sameCoatWizards);
    // filterWizards = filterWizards.concat(sameEyesWizards);
    // filterWizards = filterWizards.concat(wizards);

    // var uniqueWizards = filterWizards.filter(function(it, i){
    //   return filterWizards.indexOf(it) === i;
    // });

    // renderWizard(uniqueWizards);
  }

  function getRandomElement(array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  }

  var editWizard = document.querySelector(".setup-wizard");

  var editWizardCoat = editWizard.querySelector(".wizard-coat");

  editWizardCoat.addEventListener("click", function() {
    var newColor = getRandomElement(window.COLORS_COAT);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  var editWizardEyes = editWizard.querySelector(".wizard-eyes");

  editWizardEyes.addEventListener("click", function() {
    var newColor = getRandomElement(window.EYES_COLOR);
    this.style.fill = newColor;
    eyesColor = newColor;
  });

  function renderWizard(wizard) {
    var wizardTemplate = document.querySelector("#similar-wizard-template");
    var element = wizardTemplate.content.cloneNode(true);
    var wizardElement = element.querySelector(".wizard");

    element.querySelector(".setup-similar-label").textContent = wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;

    return element;
  }

  var successHandler = function(data) {
    wizards = data;
    renderWizard(wizards);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector(".setup-similar").classList.remove("hidden");
  };

  window.errorHandler = function(errorMessage) {
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
  window.load(successHandler, window.errorHandler);
})();
