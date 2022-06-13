import Controler from "./PostsListController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const postsList = document.querySelector(".post-list");
    const notificationElement = document.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const postsListController = new Controler(postsList, notificationController);
    //boton Signup
    const signupButton = document.querySelector(".signupButton");
    const exitButton = document.querySelector(".exitButton");
    const addButton = document.querySelector(".addButton");
    const addButtonRoom = document.querySelector(".addButtonCinema");
    const addButtonTicket = document.querySelector(".ticketButton");
    const postsListControllerButtons = new ControlerButtons(addButtonRoom, addButton,addButtonTicket, signupButton, exitButton, notificationController);
    postsListController.showPosts();
    postsListControllerButtons.signupButton();
    postsListControllerButtons.addButtonTicket();
    postsListControllerButtons.exitButton();
    postsListControllerButtons.addButton();
    postsListControllerButtons.addButtonCinema();
});
