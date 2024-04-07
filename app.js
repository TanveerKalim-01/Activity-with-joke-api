let apiUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single";
let jokeBtn = document.querySelector("#r-joke button");

jokeBtn.addEventListener('click', () => {
    let p = document.querySelector("#r-joke p");

    axios.get(apiUrl).then((res) => {
        p.innerText = res.data.joke;
    }).catch((err) => {
        p.innerText = "No joke found";
        console.log(err);
    })
})


