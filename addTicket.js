import addTicketController from "./addTicketController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";
import PostsService from "./PostsService.js";

const rooms = await PostsService.GetRooms();
const roomsList = document.querySelector("#rooms");

for (var i=0; i<rooms.length; i++){
    const room = rooms[i];
    roomsList.options.add(new Option(room.name, room.name));
}

const films = await PostsService.GetPosts();
const filmsList = document.querySelector("#films");

for (var i=0; i<films.length; i++){
    const film = films[i];
    filmsList.options.add(new Option(film.name, film.name));
}

document.addEventListener("DOMContentLoaded", () => {
    const formAdd = document.querySelector("#addForm");
    const notificationElement = formAdd.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const AddTicketController = new addTicketController(formAdd, notificationController);
    const signupButton = document.querySelector("#backAddFilm");
    const exitButton = null;
    const addButton = null;
    const addButtonCinema = null;
    const addButtonTicket = null;
    const postsListControllerButtons = new ControlerButtons(addButtonCinema, addButton, addButtonTicket, signupButton, exitButton, notificationController);
    postsListControllerButtons.backButton();
});
