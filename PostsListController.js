import PostsService from "./PostsService.js";
import { crearVista, buildTweetSpinnerView } from "./PostsView.js";

export default class Controler {
    postsList=null;
    constructor(postsList, NotificationController){
        this.postsList = postsList;
        this.NotificationController = NotificationController;
    }
    async showPosts() {
        var token = localStorage.getItem('token');
        let posts;
        //cargar spinner
        const spinner = buildTweetSpinnerView();
        this.postsList.innerHTML=spinner;
        try {
             posts = await PostsService.GetPosts();
            //generar HTML del tweet
            for (const post of posts) {
                const postElement = document.createElement('article');
                postElement.innerHTML = crearVista(post);
                const idUserProd = postElement.querySelector(".user").textContent;
                const buttonDelete = postElement.querySelector(".deleteButton");
                if (token) {
                    function parseJwt(token) {
                        var base64Url = token.split('.')[1]; var base64 = base64Url.replace('-', '+').replace('_', '/');
                        return JSON.parse(window.atob(base64));
                    };
                    var token = localStorage.getItem('token');
                    const tokenDecodificado = parseJwt(token);
                    const userId = tokenDecodificado.userId;
                    if (userId != idUserProd) {
                        buttonDelete.style.display = 'none';
                    }
                }
                else {
                    buttonDelete.style.display = 'none';
                }
                const idFilm = postElement.querySelector(".idprod").textContent;
                try {
                    buttonDelete.addEventListener('click', async event => {
                        event.preventDefault();
                        if (window.confirm("Do you really want to delete?")) {
                            try {
                                await PostsService.deleteFilm(idFilm);
                                window.location.assign("./");
                            }
                            catch (error) {
                                (this.NotificationController.show(error));
                            }
                        }
                        
                    });
                }
                catch (error) {
                    this.NotificationController.show(error)
                }

                const buttonDetalle = postElement.querySelector(".detalleButton");
                try {
                    buttonDetalle.addEventListener('click', async event => {
                        event.preventDefault();
                        try {
                            const name = postElement.querySelector("h2").textContent;
                            localStorage.setItem('name', name);
                            const sinopsis = postElement.querySelector("h3").textContent;
                            localStorage.setItem('sinopsis', sinopsis);
                            const imgPath = postElement.querySelector("img").src;
                            localStorage.setItem('imgPath', imgPath);
                            const webOficial = postElement.querySelector("h4").textContent;
                            localStorage.setItem('webOficial', webOficial);
                            const originalTitle = postElement.querySelector(".originalTitle").textContent;
                            localStorage.setItem('originalTitle', originalTitle);
                            const movieGenre = postElement.querySelector(".movieGenre").textContent;
                            localStorage.setItem('movieGenre', movieGenre);
                            const ageRaiting = postElement.querySelector(".ageRaiting").textContent;
                            localStorage.setItem('ageRaiting', ageRaiting);
                            const duration = postElement.querySelector(".duration").textContent;
                            localStorage.setItem('duration', duration);
                            const posted = postElement.querySelector(".posted").textContent;
                            localStorage.setItem('posted', posted);
                                window.location.assign("./detalle.html");
                            }
                            catch (error) {
                                (this.NotificationController.show(error));
                            }
                    });
                }
                catch (error) {
                    this.NotificationController.show(error)
                }
                
            //incluir tweet en el dom
                this.postsList.appendChild(postElement);
            }
            const loader = document.querySelector(".loader");
            loader.classList.add("hidden");
        } catch (error) {
            this.NotificationController.show(error)
        }
    }
}






//Hecho anteriormente
//document.querySelector("#button2").addEventListener("click", (event) => {
//    drawTime2(event.target.textContent);
//});

//function drawTime() {
//    document.getElementById("demo").innerHTML = new Date();
//}

//function drawTime2(message) {
//    document.getElementById("demo2").innerHTML = message;
//}
