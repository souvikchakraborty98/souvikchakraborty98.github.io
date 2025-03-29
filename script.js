function createFavicon() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.font = "bold 40px Arial";
    ctx.fillStyle = "#ffca28";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SC", canvas.width / 2, canvas.height / 2);


    document.getElementById("dynamic-favicon").href = canvas.toDataURL("image/png");
}

createFavicon();

function toggleTheme() {
    let body = document.body;
    body.classList.toggle('light-theme');
    let icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
    }
});