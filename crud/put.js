function updateProduct(e) {
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("product").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => alert("Updated Successfully"))
    .catch((err) => console.log(err));
}
