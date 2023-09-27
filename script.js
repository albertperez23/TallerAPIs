document.addEventListener("DOMContentLoaded", function () {
    const loadDataButton = document.getElementById("loadData");
    const dataContainer = document.getElementById("dataContainer");

    loadDataButton.addEventListener("click", function () {
        // URL de la API de JSONPlaceholder
        const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

        // Realizar una solicitud GET a la API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Mostrar los datos en el contenedor
                dataContainer.innerHTML = `
                    <h2>Título: ${data.title}</h2>
                    <p>Contenido: ${data.body}</p>
                `;
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
            });
    });
});
