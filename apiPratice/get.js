
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", getmethod);

    function getmethod() {
        fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user", {
            method: "GET",
            headers: {"content-type":"appliction/json"}

        })
        .then((res) => {
            if (res.ok) {
                return res.json()

            }
            throw new Error("Failed to fetch image");

        })
        .then((data) => {
            const getbox = document.querySelector(".getbox");
            getbox.innerHTML=""

            data.forEach((item) => {
                const img= `
                <div class="images"> 
                    <h2>${"name : " + item.name}</h2>
                    <img src = "${item.avatar}" alt="${item.name}"/>

                </div> `
                getbox.innerHTML += img;
            })
        })
        .catch((error) => {
            console.log(error);
            
        })
    }
