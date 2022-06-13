export function crearVista(posts) {
    const postTemplate =  
     `
    <div class="post">
    <h2>${posts.name}</h2>
    <h3>${posts.sinopsis}</h3>
    <p style="color:white">Posted by UserId:</p>
    <p class="user">${posts.userId}</p>
    <p style="color:white">Id film:</p>
    <p class="idprod">${posts.id}</p>
    <img src="${posts.imagen}" alt="${posts.name}" height="100px">
    <h4>${posts.webOficial}</h4>
    <p class="originalTitle" style="color:white">${posts.originalTitle}</p>
    <p class="movieGenre" style="color:white">${posts.movieGenre}</p>
    <p class="ageRaiting" style="color:white">${posts.ageRaiting}</p>
    <p class="duration" style="color:white">${posts.duration}</p>
    <p class="posted">${posts.updatedAt}</p>
    <button id="${posts.id}" class="deleteButton">Eliminar</button>
    <button id="${posts.id}" class="detalleButton">Detalle</button>
    <button id="${posts.id}" class="reservaButton">Reservar</button>
    </div>
    `;
    return postTemplate;
}

export function buildTweetSpinnerView() {
    return '<div class="loader"><div></div></div>';
}