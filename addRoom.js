import addRoomController from "./addRoomController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";
import PostsService from "./PostsService.js";

const buttonDelete = document.querySelector("#deleteRoomButton");

buttonDelete.addEventListener('click', async event => {
    event.preventDefault();
    const idRoom = document.querySelector("#roomDelete").value;
    
    if (window.confirm("Do you really want to delete?")) {
        try {
            await PostsService.deleteRoom(idRoom);
            window.location.assign("./");
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    }
    
});



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

const rooms = await PostsService.GetRooms();
const roomsList = document.querySelector("#allRooms");
for (var i=0; i<rooms.length; i++){
    const room = rooms[i];
    roomsList.innerHTML += "<div><p>"+room.id+"</p><p>"+room.rows+"</p><p>"+room.columns+"</p></div>";
}