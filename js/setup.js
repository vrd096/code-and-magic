var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb((0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var wizards = [
    {
        name: function () {
            var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
            var randomSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
            return randomName + ' ' + randomSurname;
        },
        coatColor: function () {
            var randomColor = COLORS_COAT[Math.floor(Math.random() * COLORS_COAT.length)];

            return randomColor;
        },
        eyesColor: function () {
            var randomEyes = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
            return randomEyes;
        } 
    },
    {
        name: function () {
            var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
            var randomSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
            return randomName + ' ' + randomSurname;
        },
        coatColor: function () {
            var randomColor = COLORS_COAT[Math.floor(Math.random() * COLORS_COAT.length)];
            return randomColor;
        },
        eyesColor: function () {
            var randomEyes = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
            return randomEyes;
        } 
    },
    {
        name: function () {
            var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
            var randomSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
            return randomName + ' ' + randomSurname;
        },
        coatColor: function () {
            var randomColor = COLORS_COAT[Math.floor(Math.random() * COLORS_COAT.length)];
            return randomColor;
        },
        eyesColor: function () {
            var randomEyes = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
            return randomEyes;
        } 
    },
    {
        name: function () {
            var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
            var randomSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
            return randomName + ' ' + randomSurname;
        },
        coatColor: function () {
            var randomColor = COLORS_COAT[Math.floor(Math.random() * COLORS_COAT.length)];
            return randomColor;
        },
        eyesColor: function () {
            var randomEyes = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
            return randomEyes;
        } 
    }
];

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    for (var i = 0; i < wizards.length; i++) {
        wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name();
        wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor();
        wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor();
       
    };  
    return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0 ; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
};

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
