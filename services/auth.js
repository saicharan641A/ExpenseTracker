import axios from "axios";

const API_KEY = "AIzaSyBWmZBG0Axr_QW_FxPB9V9ILeoMiPds20s";

export async function createUser(email, password) {

    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
            email,
            password,
            returnSecureToken: true,
        }
    );

    return response.data;
}

export async function login(email, password) {

    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
            email,
            password,
            returnSecureToken: true,
        }
    );

    return response.data;
}