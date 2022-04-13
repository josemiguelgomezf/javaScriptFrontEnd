class AddProductService {
    constructor() {
    }

    async uploadImage() {

        const image = document.querySelector("#imageInput");
        const formData = new FormData();
        formData.append('file', image.files[0]);
        if (image.files[0] == null) {
            return null;
        }
        const response = await fetch("http://localhost:8000/upload", {
            method: 'POST', // or 'PUT'
            body: formData, // data can be `string` or {object}!
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }
        else {
            window.location.assign("./");
        }

        const imagePath = await datos.path;
        return imagePath;
    }

    async createProduct(nombre, descripcion, image, precio, tipo) {

        const data =
        {
            "nombre": nombre,
            "descripcion": descripcion,
            "imagen": image,
            "precio": precio,
            "tipo": tipo
        };
        
        const response = await fetch("http://localhost:8000/api/anuncios", {
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
    }
}

export const addProductService = new AddProductService();