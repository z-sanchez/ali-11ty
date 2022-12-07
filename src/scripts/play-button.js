let videoButtons = document.getElementsByClassName("play-button");
let videos = document.getElementsByClassName("mediaItem-video");

Array.from(videoButtons).forEach((button, index) => {
  button.addEventListener("click", (e) => {
    stopVideos();
    let video = videos[index];
    video.setAttribute("controls", true);
    video.play();
    e.target.style.display = "none";
  });
});

const stopVideos = () => {
  Array.from(videos).forEach((video, index) => {
    video.pause();
    video.removeAttribute("controls");
    videoButtons[index].style.display = "block";
  });
};
