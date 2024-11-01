// Background music control
document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    
    // Start music on first user interaction
    document.body.addEventListener('click', () => {
        if (!bgMusic.playing) {
            bgMusic.play().catch(err => console.log("Playback prevented:", err));
        }
    }, { once: true });
});

// Cursor trail effect
const cursorTrail = document.querySelector('.cursor-trail');
const trailDots = [];
const maxDots = 20;

document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    cursorTrail.appendChild(dot);
    trailDots.push(dot);

    if (trailDots.length > maxDots) {
        const removedDot = trailDots.shift();
        removedDot.remove();
    }

    setTimeout(() => {
        dot.remove();
        trailDots.splice(trailDots.indexOf(dot), 1);
    }, 1000);
});

// Raining GIFs
const gifContainer = document.getElementById('gifContainer');
const gifUrls = [
    'wifdeng.gif',
    'ansem.gif',
    'poppy.gif',
    '711.png'
];

function createFallingGif() {
    const gif = document.createElement('img');
    gif.src = gifUrls[Math.floor(Math.random() * gifUrls.length)];
    gif.className = 'gif';
    gif.style.left = Math.random() * window.innerWidth + 'px';
    gif.style.animationDuration = (Math.random() * 3 + 2) + 's';
    gifContainer.appendChild(gif);

    gif.addEventListener('animationend', () => gif.remove());
}

// Create new falling GIF every 500ms
setInterval(createFallingGif, 500);

// Hodler counter animation
// const hodlerCount = document.getElementById('hodlerCount');
// let count = 7110;

// setInterval(() => {
//    count += Math.floor(Math.random() * 10);
//    hodlerCount.textContent = count.toLocaleString();
// }, 3000);

// Music control
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isMuted = false;

musicToggle.addEventListener('click', () => {
    if (isMuted) {
        bgMusic.volume = 1;
        musicToggle.textContent = '🔊';
    } else {
        bgMusic.volume = 0;
        musicToggle.textContent = '🔈';
    }
    isMuted = !isMuted;
});

// Floating frame collision detection and bounce effect
const floatingFrame = document.querySelector('.floating-frame');
let posX = 0;
let posY = 0;
let velocityX = 3;
let velocityY = 2;

function updateFramePosition() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;

    posX += velocityX;
    posY += velocityY;

    // Bounce off edges
    if (posX >= maxX || posX <= 0) velocityX *= -1;
    if (posY >= maxY || posY <= 0) velocityY *= -1;

    floatingFrame.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(updateFramePosition);
}

updateFramePosition();

// Update the copyCA function to work with both button and text
function copyCA() {
    const ca = "DengW1fPopCat711SolanaAnsemToTheMoon...711";
    navigator.clipboard.writeText(ca)
        .then(() => {
            const btn = document.querySelector('.copy-btn');
            const code = document.querySelector('.ca-box code');
            btn.textContent = '✅';
            code.style.color = '#9945FF'; // Visual feedback on text
            setTimeout(() => {
                btn.textContent = '📋';
                code.style.color = '#14F195';
            }, 2000);
        })
        .catch(err => console.error('Failed to copy:', err));
}

// Add click handler to the code element
document.addEventListener('DOMContentLoaded', () => {
    const codeElement = document.querySelector('.ca-box code');
    codeElement.addEventListener('click', copyCA);
});