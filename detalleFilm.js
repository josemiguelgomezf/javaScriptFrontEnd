import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";



document.addEventListener("DOMContentLoaded", () => {
    const notificationElement = document.querySelector("#notificationDetalle");
    const notificationController = new NotificationController(notificationElement);
    const signupButton = document.querySelector("#backAddDetalle");
    const exitButton = null;
    const addButton = null;
    const postsListControllerButtons = new ControlerButtons(null, null, null, signupButton, null, null);
    postsListControllerButtons.backButton();

    const name = document.querySelector("#nameDetalleFilm");
    const sinopsis = document.querySelector("#sinopsisDetalleFilm");
    const img = document.querySelector("#imgDetalleFilm");
    const webOficial = document.querySelector("#webOficialDetalleFilm");
    const originalTitle = document.querySelector("#originalTitleDetalleFilm");
    const movieGenre = document.querySelector("#movieGenreDetalleFilm");
    const ageRaiting = document.querySelector("#ageRaitingDetalleFilm");
    const duration = document.querySelector("#durationGenreDetalleFilm");

    name.innerText = localStorage.getItem('name');
    sinopsis.innerText = localStorage.getItem('sinopsis');
    img.src = localStorage.getItem('imgPath');
    webOficial.innerText = localStorage.getItem('webOficial');
    originalTitle.innerText = localStorage.getItem('originalTitle');
    movieGenre.innerText = localStorage.getItem('movieGenre');
    ageRaiting.innerText = localStorage.getItem('ageRaiting');
    duration.innerText = localStorage.getItem('duration');
});
