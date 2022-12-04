let videoButtons = document.getElementsByClassName("play-button");
let videos = document.getElementsByClassName("mediaItem-video");

console.log(videoButtons, videos);

Array.from(videoButtons).forEach((button, index) => {
  button.addEventListener("click", (e) => {
    let video = videos[index];
    video.setAttribute("controls", true);
    video.play();
    e.target.style.display = "none";
  });
});
