const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let carX = 0;
let carSpeed = 2;
let stars = [];
const numStars = 50;

// Generate stars
for (let i = 0; i < numStars; i++) {
  stars.push({ x: Math.random() * 600, y: Math.random() * 200 });
}

// Toggle car speed on click
canvas.addEventListener("click", () => {
  carSpeed = carSpeed === 2 ? 5 : 2;
});

// Moon
function drawMoon() {
  ctx.beginPath();
  ctx.arc(500, 80, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffaa";
  ctx.fill();
}

// Stars
function drawStars() {
  ctx.fillStyle = "#ffffff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
    ctx.fill();
    star.y += 0.2;
    if (star.y > 200) star.y = 0;
  });
}

// Buildings
function drawBuildings() {
  const heights = [150, 120, 180, 140, 160];
  ctx.fillStyle = "#333366";
  heights.forEach((h, i) => {
    ctx.fillRect(i * 120, 400 - h, 100, h);
  });
}

// Road
function drawRoad() {
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 350, 600, 50);

  ctx.strokeStyle = "#fff";
  ctx.setLineDash([15, 10]);
  ctx.beginPath();
  ctx.moveTo(0, 375);
  ctx.lineTo(600, 375);
  ctx.stroke();
  ctx.setLineDash([]);
}

// Car
function drawCar() {
  ctx.fillStyle = "#ff3333";
  ctx.fillRect(carX, 330, 60, 20);
  ctx.beginPath();
  ctx.arc(carX + 10, 350, 6, 0, Math.PI * 2);
  ctx.arc(carX + 50, 350, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();

  carX += carSpeed;
  if (carX > 600) carX = -60;
}

// Animate everything
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMoon();
  drawStars();
  drawBuildings();
  drawRoad();
  drawCar();
  requestAnimationFrame(animate);
}

animate();
