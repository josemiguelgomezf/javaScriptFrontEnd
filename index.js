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
    const postsListControllerButtons = new ControlerButtons(addButton, signupButton, exitButton, notificationController);
    postsListController.showPosts();
    postsListControllerButtons.signupButton();
    postsListControllerButtons.exitButton();
    postsListControllerButtons.addButton();
});
