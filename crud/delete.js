function deleteUser() {
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("result").innerText =
          "User deleted succesfully";
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}