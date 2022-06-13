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

            const name = this.addForm.querySelector("#nameInput").value;

            const rows = this.addForm.querySelector("#rowsInput").value;

            const columns = this.addForm.querySelector("#columnsInput").value;

            
            try {
                await addTicketService.createTicket(name, rows, columns);
                window.location.assign("./");
            }
            catch (error) {
                this.NotificationController.show(error);
            }
            
        });
    }
}