export function crearVista(posts) {
    const postTemplate =  
     `
    <div class="post">
    <h2>${posts.nombre}</h2>
    <h3>${posts.descripcion}</h3>
    <p style="color:white">Posted by UserId:</p>
    <p class="user">${posts.userId}</p>
    <p style="color:white">Id product:</p>
    <p class="idprod">${posts.id}</p>
    <img src="${posts.imagen}" alt="${posts.nombre}" height="100px">
    <p class="precio">${posts.precio}</p>
    <p class="tipo" style="color:white">${posts.tipo}</p>
    <p class="posted">${posts.updatedAt}</p>
    <button id="${posts.id}" class="deleteButton">Eliminar</button>
    <button id="${posts.id}" class="detalleButton">Detalle</button>
    </div>
    `;
    return postTemplate;
}

export function buildTweetSpinnerView() {
    return '<div class="loader"><div></div></div>';
}