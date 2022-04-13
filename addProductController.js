import {addProductService} from "./addProductService.js";

export default class addProductController {
    //Constructor de la clase
    constructor(addForm, NotificationController) {
        this.addForm = addForm;
        this.NotificationController = NotificationController;
        this.onSubmitForm();
    }

    //Método que se ejectuta al hacer click en el botón Crear product
    onSubmitForm() {
        this.addForm.addEventListener("submit", async (event)=>{
            event.preventDefault();
            //valor
            const name = this.addForm.querySelector("#nameInput").value;
            //valor
            const description = this.addForm.querySelector("#descriptionInput").value;

            const precio = this.addForm.querySelector("#precioInput").value;

            const divisa = this.addForm.querySelector("#divisaInput").value;

            const tipo = this.addForm.querySelector("#tipoInput").value;
            
            try {
                var imagePath = await addProductService.uploadImage();
                if (imagePath == null) {
                    imagePath = "./images/Javapop.png";
                }
                await addProductService.createProduct(name, description, imagePath, precio + divisa, tipo);
                window.location.assign("./");
            }
            catch (error) {
                this.NotificationController.show(error);
            }
            
        });
    }
}