function getParam(paramName, fallback) {
  return new URLSearchParams(window.location.search).get(paramName) || fallback;
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-href]").forEach((el) => {
    el.href = getParam(el.dataset["href"], el.href);
  });

  document.querySelectorAll("[data-innertext]").forEach((el) => {
    el.innerText = getParam(el.dataset["innertext"], el.innerText);
  });
});
