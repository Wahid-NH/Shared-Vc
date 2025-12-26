const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

const videoA = document.getElementById("camA");
const videoB = document.getElementById("camB");

// set canvas resolution
canvas.width = 1280;
canvas.height = 720;

// Kamera user (A)
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    videoA.srcObject = stream;
  })
  .catch(err => alert("Camera error"));

// Video dummy (B) — ganti nanti
videoB.src = "https://www.w3schools.com/html/mov_bbb.mp4";

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw user A
  ctx.drawImage(videoA, 100, 150, 400, 420);

  // draw user B
  ctx.drawImage(videoB, 780, 150, 400, 420);

  requestAnimationFrame(draw);
}

draw();