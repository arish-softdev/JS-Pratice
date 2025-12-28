let button = document.querySelector("#fetch-button");
button.addEventListener("click", generator);

function generator() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#ri").src = data.message;
    })
    .catch((err) => {
      console.log("error fetching image:", err);
    });
}
