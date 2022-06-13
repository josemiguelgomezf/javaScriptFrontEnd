import {addFilmService} from "./addFilmService.js";

export default class addFilmController {
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

            const sinopsis = this.addForm.querySelector("#sinopsisInput").value;

            const webOficialInput = this.addForm.querySelector("#webOficialInput").value;

            const originalTitleInput = this.addForm.querySelector("#originalTitleInput").value;
            
            const movieGenreInput = this.addForm.querySelector("#movieGenreInput").value;

            const ageRaitingInput = this.addForm.querySelector("#ageRaitingInput").value;

            const durationInput = this.addForm.querySelector("#durationInput").value;

            
            try {
                var imagePath = await addFilmService.uploadImage();
                if (imagePath == null) {
                    imagePath = "./images/Javapop.png";
                }
                await addFilmService.createFilm(name, sinopsis, imagePath, webOficialInput, originalTitleInput, movieGenreInput, ageRaitingInput, durationInput);
                window.location.assign("./");
            }
            catch (error) {
                this.NotificationController.show(error);
            }
            
        });
    }
}