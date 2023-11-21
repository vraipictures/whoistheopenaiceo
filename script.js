// Function to create confetti animation
function createConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size to cover the whole window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiColors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
  const particles = [];

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 8 + 4;
    this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
  }

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 10; i++) {
      particles.push(new Particle());
    }

    for (const particle of particles) {
      particle.draw();
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x > canvas.width || particle.x < 0) {
        particle.speedX *= -1;
      }
      if (particle.y > canvas.height || particle.y < 0) {
        particle.speedY *= -1;
      }
    }

    requestAnimationFrame(drawConfetti);
  }

  // Display confetti animation
  canvas.style.display = 'block';
  drawConfetti();
}

// Event listener for window load
window.addEventListener('load', function () {
  createConfetti(); // Call the confetti function when the window finishes loading
});
