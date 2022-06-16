
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
            function download(filename, text) {
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                element.setAttribute('download', filename);
              
                element.style.display = 'none';
                document.body.appendChild(element);
              
                element.click();
              
                document.body.removeChild(element);
              }
              
              // Start file download.
              download("reserva.txt",rooms+"/"+rows+"/"+columns+"/"+film+"/"+date+"/"+hour);
        }
        catch (error) {
            const notificationElement = document.querySelector(".notification");
            const notificationController = new NotificationController(notificationElement);
            notificationController.show(error);
        }
    
});

