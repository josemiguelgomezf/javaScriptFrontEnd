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
    roomsList.innerHTML += "<div class=container><p>Id:"+room.id+"</p><p>Name:"+room.name+"</p><p>Rows:"+room.rows+"</p><p>Columns:"+room.columns+"</p></div>";
}

const buttonEdit = document.querySelector("#editRoomButton");

buttonEdit.addEventListener('click', async event => {
    event.preventDefault();
    const id = document.querySelector("#roomEdit").value;
    const name = document.querySelector("#nameInput").value;
    const rows = document.querySelector("#rowsInput").value;
    const columns = document.querySelector("#columnsInput").value;
    
    if (window.confirm("Do you really want to edit?")) {
        try {
            await PostsService.editRoom(id, name, rows, columns);
            window.location.assign("./");
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    }
    
});