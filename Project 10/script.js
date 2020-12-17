const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJokes);

generateJokes();

//Using .then
function generateJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}

//Using Async & await
// async function generateJokes() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const res = await fetch("https://icanhazdadjoke.com", config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }
