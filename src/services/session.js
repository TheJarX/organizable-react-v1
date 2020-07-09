import {apiUrl} from "../utils";

const saveToken = token => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');

const loginUser = async (loginInfo) => {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            body: JSON.stringify(loginInfo),
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await response.json();

        if (response.ok) {
            saveToken(data.token);
            return {data};
        } else {
            return {error: data.errors.message};
        }
    } catch (error) {
        return {error: "Network error"};
    }
};

const logoutUser = async (user) => {
    try {
        const response = await fetch(`${apiUrl}/logout`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Token token="${user.token}"`,
            },
        });

        if (response.ok) {
            return {data: true};
        } else {
            const data = await response.json();
            return {error: data.errors.message};
        }
    } catch (error) {
        console.log(error);
        return {error: "Network error"};
    }
};

export {loginUser, logoutUser, getToken, saveToken};