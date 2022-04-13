import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";



document.addEventListener("DOMContentLoaded", () => {
    const notificationElement = document.querySelector("#notificationDetalle");
    const notificationController = new NotificationController(notificationElement);
    const signupButton = document.querySelector("#backAddDetalle");
    const exitButton = null;
    const addButton = null;
    const postsListControllerButtons = new ControlerButtons(addButton, signupButton, exitButton, notificationController);
    postsListControllerButtons.backButton();
    const nombre = document.querySelector("#nombreDetalleProducto");
    const description = document.querySelector("#descriptionDetalleProducto");
    const img = document.querySelector("#imgDetalleProducto");
    const precio = document.querySelector("#precioDetalleProducto");
    const date = document.querySelector("#dateDetalleProducto");
    const tipo = document.querySelector("#tipoDetalleProducto");
    nombre.innerText = localStorage.getItem('nombre');
    description.innerText = localStorage.getItem('description');
    img.src = localStorage.getItem('imgPath');
    precio.innerText = localStorage.getItem('precio');
    date.innerText = localStorage.getItem('date');
    tipo.innerText = localStorage.getItem('tipo');
});
