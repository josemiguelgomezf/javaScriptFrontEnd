class AddRoomService {
    constructor() {
    }

    async createRoom(name, rows, columns) {
        const data =
        {
            "name": name,
            "rows": rows,
            "columns": columns,
        };
        
        const response = await fetch("http://localhost:8000/api/room", {
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

export const addRoomService = new AddRoomService();