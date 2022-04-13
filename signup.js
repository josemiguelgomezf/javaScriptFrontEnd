import SignUpController from "./SignupController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";



document.addEventListener("DOMContentLoaded", () => {
    const formSignUp = document.querySelector("#signupForm");
    const logginForm = document.querySelector("#logginForm");
    const notificationElement = formSignUp.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const signupController = new SignUpController(formSignUp,logginForm, notificationController);
    const signupButton = document.querySelector("#backButtonSignUp");
    const exitButton = null;
    const addButton = null;
    const postsListControllerButtons = new ControlerButtons(addButton, signupButton, exitButton, notificationController);
    postsListControllerButtons.backButton();
});
