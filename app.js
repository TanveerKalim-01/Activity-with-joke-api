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
let catUrl = 'https://cataas.com/cat/cute/says/';
let inp = document.querySelector("#r-cat input");
let catBtn = document.querySelector('#r-cat button');
let img = document.querySelector('#r-cat img');

catBtn.addEventListener("click", async () => {
    if(inp.value != "") {
        let url = catUrl + inp.value + "?fontColor=orange&fontSize=50&square";
        inp.value = "";
        try {
            let res = await axios.get(url, { responseType: "blob" }); //send headers
            if (res.statusText.toLowerCase() === "ok") {
                // Create an object URL from the blob
                console.log(res);
                console.log(res.data);
                const imgUrl = URL.createObjectURL(res.data);
                // Set the src attribute of the img element to the object URL
                console.log(imgUrl);
                img.setAttribute("src", imgUrl);
            } else {
                img.setAttribute("src", '/');
                img.setAttribute("alt", "No image found");
            }
        } catch (err) {
            img.setAttribute("src", '/');
            img.setAttribute("alt", "No image found");
        }
    } 
})

// Third API for Project

// Reddit API endpoint URL
const url = 'https://www.reddit.com/r/Wallstreetbets/top.json?limit=4';

// Parameters (optional)
// const params = {
//   limit: 5 // Number of top posts to retrieve
// };

// Make the GET request
axios.get(url )
  .then(response => {
    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Access and process the retrieved data as needed
      const data = response.data.data.children;
      data.forEach(post => {
        console.log(post.data.title);
      });
    } else {
      console.log('Failed to retrieve data:', response.status);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
