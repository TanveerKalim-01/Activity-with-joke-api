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

// Second Api project
const catUrl = 'https://cataas.com/cat/cute/says/';
const inp = document.querySelector("#r-cat input");
const catBtn = document.querySelector('#r-cat button');
const img = document.querySelector('#r-cat img');

catBtn.addEventListener("click", async () => {
  if (inp.value !== "") {
    const url = catUrl + inp.value + "?fontColor=orange&fontSize=30&square";
    inp.value = "";
    try {
      const res = await axios.get(url, );
      console.log(res);
      console.log(res.config.url);
      let imgUrl = res.config.url;
      img.setAttribute("src", imgUrl);
    } catch (err) {
      console.error(err);
      img.setAttribute("src", '/');
      img.setAttribute("alt", "No image found");
    }
  }
});
