const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const backbutton = document.getElementsByClassName("fa-solid");
// const body = docume

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// backbutton.addEventListener("click", ()=>{

// })


// function changeBackground() {
//     fetch('https://source.unsplash.com/random/1920x1080/?nature,abstract')
//     .then(response => {
//         document.body.style.backgroundImage = `url(${response.url})`;
//     }).catch(error => console.error("error fetching image:", error));
// }

// setInterval(changeBackground, 5000); // Changes every 5 seconds
// changeBackground();