export default class ControlerButtons {
    postsList=null;
    constructor(addButtonElementRoom, addButtonElement, signupButtonElement, exitButtonElement, notificationController) {
        this.addButtonElementRoom = addButtonElementRoom;
        this.addButtonElement = addButtonElement;
        this.signupButtonElement = signupButtonElement;
        this.exitButtonElement = exitButtonElement;
        this.notificationController = notificationController;
    }

    signupButton(){
            var token = localStorage.getItem('token');
        if (token) {
            function parseJwt(token) {
                var base64Url = token.split('.')[1]; var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(window.atob(base64));
            };
            const tokenDecodificado = parseJwt(token);
            console.log(tokenDecodificado)
            const nombreUsuario = tokenDecodificado.username;
            this.signupButtonElement.innerText = nombreUsuario.substr(0,3).toUpperCase();
            this.notificationController.show("Welcome again " + nombreUsuario+ "!", "check");
        }
        else{
            this.notificationController.show("You are not logged!", "info");
            this.signupButtonElement.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.assign("./signup.html");
            });
        }
    }

    

    addButtonCinema() {
        var token = localStorage.getItem('token');
        if (token) {
            this.addButtonElementRoom.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.assign("./addRoom.html");
            });
        }
        else {
            this.notificationController.show("You are not logged! You can not upload!", "info");
            this.addButtonElementRoom.style.display = 'none';
            document.querySelector(".add").style.display = 'none';
            
        }
    }

    addButton() {
        var token = localStorage.getItem('token');
        if (token) {
            this.addButtonElement.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.assign("./addFilm.html");
            });
        }
        else {
            this.notificationController.show("You are not logged! You can not upload!", "info");
            this.addButtonElement.style.display = 'none';
            document.querySelector("#addFilmImg").style.display = 'none';
            
        }
    }

    backButton(){
        this.signupButtonElement.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.assign("./");
        });
    }

    exitButton() {
        var token = localStorage.getItem('token');
        if (token) {
            this.exitButtonElement.addEventListener('click', function (event) {
                event.preventDefault();
                localStorage.removeItem('token');
                window.location.assign("./");
            });
        }
        else {
            this.exitButtonElement.style.display = 'none';
            document.querySelector(".exit").style.display = 'none';
        }
        
    }
}