(function () {
  'use strict';

  function getParam(paramName, fallback) {
    return new URLSearchParams(window.location.search).get(paramName) || fallback;
  }

  window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-href]").forEach(function (el) {
      el.href = getParam(el.dataset["href"], el.href);
    });
    document.querySelectorAll("[data-innertext]").forEach(function (el) {
      el.innerText = getParam(el.dataset["innertext"], el.innerText);
    });
  });

}());
