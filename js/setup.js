// var setup = document.querySelector('.setup');
// setup.classList.remove('hidden');

var wizards = [
    {
        name: function () {
            var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
            var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
            var randomName = firstNames[Math.floor(Math.random() * firstNames.length)];
            var randomSurname = lastNames[Math.floor(Math.random() * lastNames.length)];

            return randomName + ' ' + randomSurname;
        },
        coatColor: function () {
            var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb((0, 0, 0)'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];

            return randomColor;
        },
        eyesColor: function () {
            var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
            var randomEyes = eyes[Math.floor(Math.random() * eyes.length)];
            return randomEyes;
        } 
    }
];


console.log(wizards[0].name());
console.log(wizards[0].coatColor());
console.log(wizards[0].eyesColor());