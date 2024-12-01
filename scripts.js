const profilePic = document.querySelector(".profile-pic");

const image1 = "assets/eu.jpg";
const image2 = "assets/eu1.jpg";

profilePic.addEventListener("click", () => {

  profilePic.style.animation = "flip 0.8s ease";

  setTimeout(() => {
    profilePic.src = profilePic.src.includes("eu.jpg") ? image2 : image1;
  }, 400);

  setTimeout(() => {
    profilePic.style.animation = "";
  }, 800);
});
