import addTicketController from "./addTicketController.js";
import NotificationController from "./NotificationController.js";
import ControlerButtons from "./PostListButtonsController.js";
import PostsService from "./PostsService.js";

const buttonDelete = document.querySelector("#deleteTicketButton");

buttonDelete.addEventListener('click', async event => {
    event.preventDefault();
    const idTicket = document.querySelector("#ticketDelete").value;
    if (window.confirm("Do you really want to delete?")) {
        try {
            await PostsService.deleteTicket(idTicket);
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
const roomsList = document.querySelector("#rooms");
const rowsMax = document.querySelector("#rows");
const columnsMax = document.querySelector("#columns");

const ticketsList = document.querySelector("#allTickets");
for (var i=0; i<tickets.length; i++){
    const ticket = tickets[i];
    console.log(ticket);
    ticketsList.innerHTML += "<div class=container><p>Id:"+ticket.id+"</p><p>Row:"+ticket.row+"</p><p>Column:"+ticket.column+"</p><p>"+ticket.room+"</p><p>"+ticket.film+"</p><p>"+ticket.date+"</p><p>"+ticket.hour+"</p></div>";
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
};

const buttonEdit = document.querySelector("#editTicketButton");

buttonEdit.addEventListener('click', async event => {
    event.preventDefault();
    const id = document.querySelector("#ticketEdit").value;
    const rooms = document.querySelector("#rooms").value;
    const rows = document.querySelector("#rows").value;
    const columns = document.querySelector("#columns").value;
    const film = document.querySelector("#films").value;
    const date = document.querySelector("#dateInput").value;
    const hour = document.querySelector("#hourInput").value;
    
    if (window.confirm("Do you really want to edit?")) {
        try {
            await PostsService.editTicket(id, rooms, rows, columns, film, date, hour);
            window.location.assign("./");
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    }
    
});

