window.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.src = "https://www.googletagmanager.com/gtag/js?id=UA-174206228-1";
  document.body.appendChild(script);
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = () => {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "UA-174206228-1");
  };
});
