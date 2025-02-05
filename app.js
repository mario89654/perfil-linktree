document.addEventListener("DOMContentLoaded", function () {
    const infoContainer = document.getElementById("info-container");

    const name = document.createElement("h2");

    name.textContent = "María Jesús / Ciclo Menstrual";
    name.style.color = "White";
    const description = document.createElement("p");
    description.textContent = "Instructora certificada en métodos de reconocimiento de la fertilidad.";
    description.style.color = "White";
    infoContainer.appendChild(name);
    infoContainer.appendChild(description);
});