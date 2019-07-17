"use strict";

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

  window.load = function(url, onLoad, onError) {
    var URL = "https://js.dump.academy/code-and-magick/data";

    url = url || URL;
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      xhr.status === 200
        ? onLoad(xhr.response)
        : onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
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
