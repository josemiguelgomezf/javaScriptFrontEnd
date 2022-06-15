import addFilmController from "./addFilmController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";
import PostsService from "./PostsService.js";


document.addEventListener("DOMContentLoaded", () => {
    const formAdd = document.querySelector("#addForm");
    const notificationElement = formAdd.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const AddFilmController = new addFilmController(formAdd, notificationController);
    const signupButton = document.querySelector("#backAddFilm");
    const exitButton = null;
    const addButton = null;
    const addButtonCinema = null;
    const addButtonTicket = null;
    const postsListControllerButtons = new ControlerButtons(addButtonCinema, addButton, addButtonTicket, signupButton, exitButton, notificationController);
    postsListControllerButtons.backButton();
});

const buttonEdit = document.querySelector("#editFilmButton");

buttonEdit.addEventListener('click', async event => {
    event.preventDefault();
    const id = document.querySelector("#filmEdit").value;
    const name = document.querySelector("#nameInput").value;
    const sinopsis = document.querySelector("#sinopsisInput").value;
    const webOficial = document.querySelector("#webOficialInput").value;
    const originalTitle = document.querySelector("#originalTitleInput").value;
    const ageRaiting = document.querySelector("#ageRaitingInput").value;
    const duration = document.querySelector("#durationInput").value;
    const movieGenre = document.querySelector("#movieGenreInput").value;
    
    if (window.confirm("Do you really want to edit?")) {
        try {
            await PostsService.editFilm(id, name, sinopsis, webOficial, originalTitle, ageRaiting, duration, movieGenre);
            window.location.assign("./");
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    }
    
});
