"use strict";

var randomString = function(param) {
  var randomParam = param[Math.floor(Math.random() * param.length)];
  return randomParam;
};
