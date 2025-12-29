document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JOSN.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});
