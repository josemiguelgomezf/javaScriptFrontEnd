import addRoomController from "./addRoomController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";



document.addEventListener("DOMContentLoaded", () => {
    const formAdd = document.querySelector("#addForm");
    const notificationElement = formAdd.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const AddRoomController = new addRoomController(formAdd, notificationController);
    const signupButton = document.querySelector("#backAddFilm");
    const exitButton = null;
    const addButton = null;
    const addButtonCinema = null;
    const addButtonTicket = null;
    const postsListControllerButtons = new ControlerButtons(null, null, null, signupButton, null, null);
    postsListControllerButtons.backButton();
});
