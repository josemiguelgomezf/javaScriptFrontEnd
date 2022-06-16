
import NotificationController from "./NotificationController.js";
import PostsService from "./PostsService.js";


const tickets = await PostsService.GetTickets();
const rooms = await PostsService.GetRooms();
const roomsList = document.querySelector("#rooms");
const rowsMax = document.querySelector("#rows");
const columnsMax = document.querySelector("#columns");

for (var i=0; i<rooms.length; i++){
    const room = rooms[i];
    roomsList.options.add(new Option(room.name, room.name));
}




roomsList.addEventListener("change", (evt) => {
    // ACA obtenemos el option seleccionado
    const salaCine = document.querySelector(".salaCine");
    salaCine.innerHTML="";
    let option = evt.currentTarget.selectedOptions[0];
    
var roomSelect = option;
if(roomSelect !== ""){
    for (var i=0; i<rooms.length; i++){
        const room = rooms[i];
        if (room.name==roomsList.value){
            rowsMax.setAttribute("max", ""+room.rows);
            columnsMax.setAttribute("max", ""+room.columns);
            for (var z=0; z<room.rows; z++){
                for (var h=0; h<room.columns; h++){
                    salaCine.innerHTML+="<p>"+z+"-"+h+"</p>";
                }
                salaCine.innerHTML+="<p style=width:100%; >";
            }
        }
    }
}
  });

const films = await PostsService.GetPosts();
const filmsList = document.querySelector("#films");

for (var i=0; i<films.length; i++){
    const film = films[i];
    filmsList.options.add(new Option(film.name, film.name));
};

const buttonCreate = document.querySelector("#createTicketButton");

buttonCreate.addEventListener('click', async event => {
    event.preventDefault();
    const rooms = document.querySelector("#rooms").value;
    const rows = document.querySelector("#rows").value;
    const columns = document.querySelector("#columns").value;
    const film = document.querySelector("#films").value;
    const date = document.querySelector("#dateInput").value;
    const hour = document.querySelector("#hourInput").value;
    
        try {
            if (rooms===""||rows===""||columns===""||film===""||date===""||hour===""){
                throw new Error('You must complete all info!')
            }
            await PostsService.addReserva(rooms, rows, columns, film, date, hour);
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    
});

const reservas = await PostsService.GetReservas();
const ticketsList = document.querySelector("#allTickets");
for (var i=0; i<reservas.length; i++){
    const ticket = reservas[i];
    ticketsList.innerHTML += "<div class=container><p>Id:"+ticket.id+"</p><p>Row:"+ticket.row+"</p><p>Column:"+ticket.column+"</p><p>"+ticket.room+"</p><p>"+ticket.film+"</p><p>"+ticket.date+"</p><p>"+ticket.hour+"</p></div>";
}

const deleteAllReservas = document.querySelector("#deleteAllReservas");

deleteAllReservas.addEventListener('click', async event => {
    event.preventDefault();
    
        try {
            for(var i=0; i<reservas.length; i++){
                await PostsService.deleteAllReservas(i+1);
            }
            location.reload();
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    
});

        var token = localStorage.getItem('token');
        if (token) {
            function parseJwt(token) {
                var base64Url = token.split('.')[1]; var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(window.atob(base64));
            };
            const tokenDecodificado = parseJwt(token);
            console.log(tokenDecodificado);
            const nombreUsuario = tokenDecodificado.username;
            if (nombreUsuario!="admin"){
                document.querySelector("#seeTicketButton").style.display = 'none';
                document.querySelector("#deleteAllReservas").style.display = 'none';
                document.querySelector(".container").style.display = 'none';
                
            }
        }
