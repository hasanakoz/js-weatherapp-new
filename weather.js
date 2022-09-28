const form = document.querySelector(".top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem("tokenkey", "b8bd59d8cfb70eee06f98d68a4554461");
localStorage.setItem(
  "tokenkeyEncrypted",
  EncryptStringAES("b8bd59d8cfb70eee06f98d68a4554461")
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  alert("alert");
  const tokenkey = localStorage.getItem("tokenkey");
};
