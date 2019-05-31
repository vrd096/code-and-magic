// На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, 
// соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
// o Имя персонажа name запишите как текст в блок .setup-similar-label;
// o Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
// o Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.


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

    for (var i = 0; i < similarWizardTemplate.length; i++) {
        wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name();
        
        similarWizardTemplate.appendChild(wizardElement);
        console.log(wizardElement);
        
    };  
    return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0 ; i < fragment) {
    
};


document.querySelector('.setup-similar').classList.remove('hidden');


// console.log(wizards[0].name());
// console.log(wizards[0].coatColor());
// console.log(wizards[0].eyesColor());

// console.log(wizards[1].name());
// console.log(wizards[1].coatColor());
// console.log(wizards[1].eyesColor());

// console.log(wizards[2].name());
// console.log(wizards[2].coatColor());
// console.log(wizards[2].eyesColor());

// console.log(wizards[3].name());
// console.log(wizards[3].coatColor());
// console.log(wizards[3].eyesColor());