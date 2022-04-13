import {signUpService} from "./SignUpService.js";

export default class SignUpController {
    //Constructor de la clase
    constructor(signUpFormElement, logginForm, NotificationController) {
        this.signUpFormElement = signUpFormElement;
        this.logginForm = logginForm;
        this.NotificationController = NotificationController;
        this.inputsRellenos();
        this.onSubmitForm();
        this.passIsStrong();
    }

    //Método que se ejectuta al hacer click en el botón Crear suario
    onSubmitForm() {
        this.signUpFormElement.addEventListener("submit", async (event)=>{
            event.preventDefault();
            //valor del nombre de usuario
            const user = this.signUpFormElement.querySelector("#userInput").value;
            //valor de la password
            const pass = this.signUpFormElement.querySelector("#passInput").value;
            
            try {
                await signUpService.createUser(user, pass);
                try {
                    await signUpService.loginUser(user, pass);
                    window.location.assign("/");
                }
                catch (error) {
                    this.NotificationController.show(error);
                }
            }
            catch (error) {
                this.NotificationController.show(error);
            }
            
        });

        this.logginForm.addEventListener("submit", async (event)=>{
            event.preventDefault();
            //valor del nombre de usuario
            const user = this.logginForm.querySelector("#userInputLoggin").value;
            //valor de la password
            const pass = this.logginForm.querySelector("#passInputLoggin").value;
            
                try {
                    await signUpService.loginUser(user, pass);
                    window.location.assign("/");
                }
                catch (error) {
                    this.NotificationController.show(error);
                }

            
        });
    }

    //Método que recibe una contraseña y nos devuelte tru o false en función de si es fuerte
    passIsStrong(pass){
        //Expresión regular que nos permite testear si la contraseña cumple con los parámetros que queremos
        const politicaContrasenna = /^(?=(?:.*\d){2})(?=.*[A-Z])(?=.*[a-z])(?!.{0,4}(.)(?:.*\1){3})\S{8}$/;
        return politicaContrasenna.test(pass);
    }

    //Método que detecta los cambios en los input del form de crear usuario y habilita y deshabilita el botón de crear usuario
    inputsRellenos() {
        this.NotificationController.show("Remember follow instructions about password requirements.","info");
        const inputElements = Array.from(this.signUpFormElement.querySelectorAll("input"));
        inputElements.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                //valor de la password
                const pass = this.signUpFormElement.querySelector("#passInput").value;
                //valor de confirmación de password
                const passConfirm = this.signUpFormElement.querySelector("#passConfirmInput").value;
                //bool si every of inputElements (array) tienen valor
                const habilitarBoton = inputElements.every((inputElement) => inputElement.value);
                //solo se habilita el botón si todos los elementos del array inputElements tienen valor y además
                //si el valor de pass y passConfirm son iguales y además se cumple el requisito de 
                // de la contraseña, en caso contrario mensaje de alerta
                if(habilitarBoton && (pass==passConfirm) && this.passIsStrong(pass)){
                    this.signUpFormElement.querySelector("#crearUserButton").removeAttribute("disabled");
                    this.NotificationController.show("Password it is enought strong.", "check");
                }
                else{
                    this.signUpFormElement.querySelector("#crearUserButton").setAttribute("disabled", "");
                    if (pass!=passConfirm){
                        this.NotificationController.show("Passwords must be equals.");
                    }
                    if (!this.passIsStrong(pass)){
                        this.NotificationController.show("8 caracteres, con 2 dígitos, 1 may, 1 min, sin repetir 1 caracter 4 veces.");
                    }
                }
            });
        });
        
    }
}