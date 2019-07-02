"use strict";

/*
написать разные события ответа от сервера
*/

(function() {
  window.save = function(data, onLoad, onError) {
    var URL = "https://js.dump.academy/code-and-magick/";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 400:
          onError("Неверный запрос");
          break;

        case 401:
          onError("Пользователь не авторизован");
          break;

        case 404:
          onError("Ничего не найдено");
          break;

        default:
          onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
          break;
      }
    });
    xhr.addEventListener("timeout", function() {
      onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });

    xhr.timeout = 3000;

    xhr.open("POST", URL);
    xhr.send(data);
    this.console.log(xhr);
  };

  window.load = function(onLoad, onError) {
    var URL = "https://js.dump.academy/code-and-magick/data";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      if (xhr.status === 200) {
        onLoad(xhr.response);
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
