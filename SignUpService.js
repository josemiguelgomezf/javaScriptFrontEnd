class SignUpService {
    constructor() {

    }


    async createUser(user, pass) {
        const data =
        {
            "username": user,
            "password": pass
        };
        const response = await fetch("http://localhost:8000/auth/register", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }
    }

    async loginUser(user, pass) {
        const data =
        {
            "username": user,
            "password": pass
        };
        const response = await fetch("http://localhost:8000/auth/login", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const datos = await response.json();
        if (!response.ok) {
            throw new Error(datos.message);
        }

        const token = datos.accessToken;
        localStorage.setItem('token', token);
    }
}

export const signUpService = new SignUpService();
