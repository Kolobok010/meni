console.log("JS pieslēgts un darbojas");

document.getElementById("changeBtn").addEventListener("click", function () {
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").textContent = "Teksts tika mainīts pēc pogas nospiešanas!";
});

document.getElementById("nameInput").addEventListener("input", function () {
    document.getElementById("text").textContent = "Sveiki, " + this.value + "!";
});
