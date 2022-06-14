import addTicketController from "./addTicketController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";
import PostsService from "./PostsService.js";

document.addEventListener("DOMContentLoaded", () => {
    const formAdd = document.querySelector("#addForm");
    console.log(formAdd);
    const notificationElement = document.querySelector(".notification");
    const notificationController = new NotificationController(notificationElement);
    const AddTicketController = new addTicketController(formAdd, notificationController);
    AddTicketController;
    const signupButton = document.querySelector(".backButton");
    const postsListControllerButtons = new ControlerButtons(null, null, null, signupButton, null, null);
    postsListControllerButtons.backButton();
});

const tickets = await PostsService.GetTickets();
const rooms = await PostsService.GetRooms();
const ticketsList = document.querySelector("#allTickets");
const roomsList = document.querySelector("#rooms");
const rowsMax = document.querySelector("#rows");
const columnsMax = document.querySelector("#columns");

for (var i=0; i<tickets.length; i++){
    const ticket = tickets[i];
    ticketsList.innerHTML += "<p>"+ticket.id+"</p>" ;
}

for (var i=0; i<rooms.length; i++){
    const room = rooms[i];
    roomsList.options.add(new Option(room.name, room.name));
}

var roomSelect = roomsList.value;
if(roomSelect !== ""){
    for (var i=0; i<rooms.length; i++){
        const room = rooms[i];
        if (room.name==roomsList.value){
            rowsMax.setAttribute("max", ""+room.rows);
            columnsMax.setAttribute("max", ""+room.columns);
        }
    }
}

const films = await PostsService.GetPosts();
const filmsList = document.querySelector("#films");

for (var i=0; i<films.length; i++){
    const film = films[i];
    filmsList.options.add(new Option(film.name, film.name));
}

