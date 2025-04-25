function createFavicon() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 40px Arial, sans-serif"; // Added fallback font
    ctx.fillStyle = "#ffca28";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SC", canvas.width / 2, canvas.height / 2);

    const favicon = document.getElementById("dynamic-favicon");
    if (favicon) {
        favicon.href = canvas.toDataURL("image/png");
    } else {
        console.error("Favicon element not found.");
    }
}

createFavicon();

function toggleTheme() {
    let body = document.body;
    body.classList.toggle('light-theme');
    let icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    } else {
        console.error("Theme toggle icon not found.");
    }

    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        const icon = document.querySelector('.theme-toggle i');
        if (icon) {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }
});

function enableDuckFollower() {

    let duck = document.createElement("div");
    duck.classList.add("pixel-duck");
    document.body.appendChild(duck);

    duck.style.position = "absolute";

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    const speed = 0.02;

    const duckWidth = 40;
    const duckHeight = 40;

    function updatePosition(x, y) {
        targetX = x - duckWidth / 2;
        targetY = y - duckHeight / 2;
    }

    document.addEventListener("mousemove", (event) => {
        updatePosition(event.clientX, event.clientY + window.scrollY);
    });

    document.addEventListener("touchmove", (event) => {
        let touch = event.touches[0];
        updatePosition(touch.pageX, touch.pageY);
    });

    document.addEventListener("touchstart", (event) => {
        let touch = event.touches[0];
        updatePosition(touch.pageX, touch.pageY);
    });

    function animateDuck() {
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        currentX = Math.max(0, Math.min(window.innerWidth - duckWidth, currentX));
        currentY = Math.max(window.scrollY, Math.min(window.scrollY + window.innerHeight - duckHeight, currentY));

        duck.style.left = `${currentX}px`;
        duck.style.top = `${currentY}px`;

        if (document.body.contains(duck)) {
            requestAnimationFrame(animateDuck);
        }
    }

    animateDuck();

    function removeDuck(event) {
        event.stopPropagation();
        duck.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        duck.style.opacity = "0";
        duck.style.transform = "scale(0.5)";
        setTimeout(() => duck.remove(), 500);
    }

    duck.addEventListener("click", removeDuck);
    duck.addEventListener("touchstart", removeDuck);
}

setTimeout(() => {
    enableDuckFollower();
}, 30000);





