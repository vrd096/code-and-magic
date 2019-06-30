"use strict";

/*
создать функцию 
*/

(function() {
  window.upload = function(data, onSuccess) {
    var URL = "https://js.dump.academy/code-and-magick";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      onSuccess(xhr.response);
    });

    xhr.open("POST", URL);
    console.log(xhr);
    xhr.send(data);
  };

  window.load = function(onSuccess, onError) {
    var URL = "https://js.dump.academy/code-and-magick/data";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    });

    xhr.addEventListener("error", function() {
        onError("Произошла ошибка соеденения");
    });

    xhr.addEventListener("timeout", function() {
        onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });

    xhr.timeout = 10000;

    xhr.open("GET", URL);
    xhr.send();
  };
})();
