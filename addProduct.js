import addProductController from "./addProductController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";



document.addEventListener("DOMContentLoaded", () => {
    const formAdd = document.querySelector("#addForm");
    const notificationElement = formAdd.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const AddProductController = new addProductController(formAdd, notificationController);
    const signupButton = document.querySelector("#backAddProduct");
    const exitButton = null;
    const addButton = null;
    const postsListControllerButtons = new ControlerButtons(addButton, signupButton, exitButton, notificationController);
    postsListControllerButtons.backButton();
});
