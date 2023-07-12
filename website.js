const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const nums = '0123456789';

const fontSize = 20;
const columns = canvas.width/fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0,0,0,0.06)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#1f1f1f';
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = nums.charAt(Math.floor(Math.random() * nums.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 40);
/* Matrix Rain Background; Original Code from: https://github.com/javascriptacademy-stash/digital-rain */