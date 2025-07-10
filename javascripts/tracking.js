(function () {
  'use strict';

  var _arguments = arguments;
  window.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.setAttribute("async", "");
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-174206228-1";
    document.body.appendChild(script);

    script.onload = function () {
      window.dataLayer = window.dataLayer || [];

      window.gtag = function () {
        window.dataLayer.push(_arguments);
      };

      window.gtag("js", new Date());
      window.gtag("config", "UA-174206228-1");
    };
  });

}());
