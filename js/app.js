const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let rockets = [];
let gameDuration = 120; // duration in seconds
let timeLeft = gameDuration;
let gameInterval;
let isGameOver = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// start the game when the page is loaded
window.onload = startGame;

function startGame() {
  gameInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  animate();
}

function endGame() {
  clearInterval(gameInterval);
  isGameOver = true;
  // show an end of game message
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '48px Arial';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
}

// manages key pressure
window.addEventListener('keydown', (event) => {
  if (isGameOver) return;
  createFirework();
});

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const targetY = Math.random() * (canvas.height / 2);
  const color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

  rockets.push(new Rocket(x, y, targetY, color));

  playSound();
}

function playSound() {
  const audio = new Audio('sounds/fireworks.mp3');
  audio.play();
}

class Rocket {
  constructor(x, y, targetY, color) {
    this.x = x;
    this.y = y;
    this.targetY = targetY;
    this.color = color;
    this.speed = (Math.random() * 3) + 5;
    this.exploded = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y <= this.targetY && !this.exploded) {
      this.exploded = true;
      this.explode();
    }
  }

  draw() {
    if (!this.exploded) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  explode() {
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(this.x, this.y, this.color));
    }
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 2 + 1;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 6
    };
    this.alpha = 1;
    this.decay = Math.random() * 0.02 + 0.01;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= this.decay;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function animate() {
  if (isGameOver) return;

  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  rockets.forEach((rocket, index) => {
    if (!rocket.exploded) {
      rocket.update();
      rocket.draw();
    } else {
      rockets.splice(index, 1);
    }
  });

  particles.forEach((particle, index) => {
    if (particle.alpha > 0) {
      particle.update();
      particle.draw();
    } else {
      particles.splice(index, 1);
    }
  });

  // show remaining time
  ctx.font = '24px Arial';
  ctx.fillStyle = '#fff';
  ctx.fillText('Remaining time: ' + timeLeft + 's', 20, 30);
}
