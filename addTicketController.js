import {addTicketService} from "./addTicketService.js";

export default class addTicketController {
    //Constructor de la clase
    constructor(addForm, NotificationController) {
        this.addForm = addForm;
        this.NotificationController = NotificationController;
        this.onSubmitForm();
    }

    //Método que se ejectuta al hacer click en el botón Crear film
    onSubmitForm() {
        this.addForm.addEventListener("submit", async (event)=>{
            event.preventDefault();

            const room = this.addForm.querySelector("#rooms").value;

            const row = this.addForm.querySelector("#rows").value;

            const column = this.addForm.querySelector("#columns").value;

            const date = this.addForm.querySelector("#dateInput").value;

            const hour = this.addForm.querySelector("#hourInput").value;

            
            try {
                await addTicketService.createTicket(room, row, column, date, hour);
                window.location.assign("./");
            }
            catch (error) {
                this.NotificationController.show(error);
            }
            
        });
    }
}