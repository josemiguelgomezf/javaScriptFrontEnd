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
    GetTickets(){
        const url = "http://localhost:8000/api/ticket";
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
    },
    async deleteTicket(idFilm) {
        const response = await fetch("http://localhost:8000/api/ticket/" + idFilm, {
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
    },
    async deleteRoom(idFilm) {
        const response = await fetch("http://localhost:8000/api/room/" + idFilm, {
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
    },
    async editRoom(idRoom, name, rows, columns) {
        const data =
        {
            "name": name,
            "rows": rows,
            "columns": columns
        };
        
        const response = await fetch("http://localhost:8000/api/room/"+idRoom, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }
    },
    async editTicket(id, rooms, rows, columns, film, date, hour) {
        const data =
        {
            "room": rooms,
            "row": rows,
            "column": columns,
            "film": film,
            "date": date,
            "hour": hour
        };
        
        const response = await fetch("http://localhost:8000/api/ticket/"+id, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }
    },
    async createComment(comentario, pelicula) {
        const data =
        {
            "comentario": comentario,
            "pelicula": pelicula
        };
        
        const response = await fetch("http://localhost:8000/api/comentarios", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }
    },
    GetComments (){
        const url = "http://localhost:8000/api/comentarios";
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
    }
}  
