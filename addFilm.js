import addFilmController from "./addFilmController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";

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
