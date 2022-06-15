import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";
import PostsService from "./PostsService.js";



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
    const duration = document.querySelector("#durationDetalleFilm");

    name.innerText = localStorage.getItem('name');
    sinopsis.innerText = localStorage.getItem('sinopsis');
    img.src = localStorage.getItem('imgPath');
    webOficial.innerText = localStorage.getItem('webOficial');
    originalTitle.innerText = localStorage.getItem('originalTitle');
    movieGenre.innerText = localStorage.getItem('movieGenre');
    ageRaiting.innerText = localStorage.getItem('ageRaiting');
    duration.innerText = localStorage.getItem('duration');
});

const buttonComentar = document.querySelector("#publicarComentario");

buttonComentar.addEventListener('click', async event => {
    event.preventDefault();
    const comentario = document.querySelector("#comentario").value;
    const pelicula = localStorage.getItem('name');
    if (window.confirm("Do you really want to comment?")) {
        try {
            await PostsService.createComment(comentario, pelicula);
            window.location.assign("./");
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    }
    
});

const comentarios = await PostsService.GetComments();
const commentsList = document.querySelector("#comentariosList");

for (var i=0; i<comentarios.length; i++){
    const comment = comentarios[i];
    if (comment.pelicula==localStorage.getItem('name')){
        commentsList.innerHTML += "<div class=containerComment><p>"+comment.comentario+"</p><p>By:"+comment.userId+"</p><p>At:"+comment.updatedAt+"</p></div>";
    }
}
