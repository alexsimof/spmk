
const videoBtn = document.querySelector(".video__button");
const videoFrame = document.querySelector(".video__frame");
videoBtn.addEventListener("click", () => {
  const videoWindow = document.createElement("div");
  const video = document.createElement("video");
  const source = document.createElement("source");
  const close = document.createElement("img");
  videoWindow.className = "video-wrapper";
  close.className = "video-close";
  video.className = "video-container";
  video.setAttribute("autoplay", true);
  video.setAttribute("controls", true);
  video.setAttribute("preload", "auto");
  source.className = "video-source";
  source.src = "./video/SPMC_V.mp4";
  source.type = "video/mp4";
  close.src = "./images/point.svg";
  document.querySelector(".main-container").append(videoWindow);
  videoWindow.append(video);
  video.append(source);
  videoWindow.append(close);
  if (videoWindow.classList.contains("video-wrapper")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  close.addEventListener("click", () => {
    videoWindow.remove();
    document.body.style.overflow = "auto";
  });
});
