
	// Fonction pour créer un flocon de neige
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerText = "❅";
    snowflake.style.fontSize = Math.random() * 20 + "px";
    snowflake.style.color = "#fff";
    snowflake.style.position = "absolute";
    snowflake.style.top = "-10px";
    snowflake.style.left = Math.random() * 100 + "%";
    document.getElementById("snowflakes").appendChild(snowflake);

    // Animation de la chute des flocons de neige
    anime({
        targets: snowflake,
        translateY: "100vh",
        duration: Math.random() * 5000 + 5000,
        easing: "linear",
        complete: function() {
            snowflake.remove();
            createSnowflake();
        }
    });
}

// Créer plusieurs flocons de neige
for (let i = 0; i < 50; i++) {
    createSnowflake();
}

