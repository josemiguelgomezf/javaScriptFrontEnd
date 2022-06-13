export default {
    GetPosts (){
        const url = "http://localhost:8000/api/film";
    return new Promise(function(resolve, reject){
        fetch(url)
        .catch((error)=>{
            console.log(error);
            reject("La url es incorrecta.")
            throw new Error(error);
        })
        .then((responseHttp) => {
            console.log(responseHttp);
            return responseHttp.json();
        })
        .catch((error)=>{
            console.log(error);
            reject("No se puede transformar a .json")
        })
        .then((posts) => {
            console.log(posts);
            resolve(posts);
        });
    
    })
    },
    GetRooms (){
    const url = "http://localhost:8000/api/room";
    return new Promise(function(resolve, reject){
        fetch(url)
        .catch((error)=>{
            console.log(error);
            reject("La url es incorrecta.")
            throw new Error(error);
        })
        .then((responseHttp) => {
            console.log(responseHttp);
            return responseHttp.json();
        })
        .catch((error)=>{
            console.log(error);
            reject("No se puede transformar a .json")
        })
        .then((posts) => {
        
            resolve(posts);
        });
    
    })
    },
    async deleteFilm(idFilm) {
        const response = await fetch("http://localhost:8000/api/film/" + idFilm, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }
    }
}  
