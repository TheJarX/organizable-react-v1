import {apiUrl, objectToSnake} from "../utils";

const createUser = async (userdata) => {
    try {
        const response = await fetch(`${apiUrl}/users`, {
            method: "post",
            body: JSON.stringify({user: objectToSnake(userdata)}),
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {response, data};
        } else {
            return {error: data.errors.message};
        }
    } catch (error) {
        return {error: "network error"};
    }
};

const updateUser = async (user, newdata) => {
    try {
        const response = await fetch(`${apiUrl}/users/${user.id}`, {
            method: "patch",
            body: JSON.stringify({user: objectToSnake(newdata)}),
            headers: {
                "content-type": "application/json",
                authorization: `token token="${user.token}"`,
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {data};
        } else {
            return {error: data.errors.message};
        }
    } catch (error) {
        return {error: "network error"};
    }
};

const deleteUser = async (user) => {
    try {
        const response = await fetch(`${apiUrl}/users/${user.id}`, {
            method: "delete",
            headers: {
                "content-type": "application/json",
                authorization: `token token="${user.token}"`,
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
        return {error: "network error"};
    }
};

export {createUser, updateUser, deleteUser};