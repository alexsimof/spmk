
const videoBtn = document.querySelector(".video__button");
const videoImg = document.querySelector(".video__img");
const video = document.querySelector(".video");
videoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  videoBtn.className = "video-active";
  const videoPlay = document.createElement("video");
  const source = document.createElement("source");
  video.append(videoPlay);
  videoPlay.append(source);
  videoPlay.className = "video__frame";
  videoImg.style.display = "none";
  source.src = './video/SPMC_V.mp4';
  videoPlay.style.display = "block";
  videoPlay.setAttribute("autoplay", true)
  videoPlay.setAttribute("controls", true)
  videoPlay.muted =  "muted";
  source.setAttribute("type",'video/mp4')
});
