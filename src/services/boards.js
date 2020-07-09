import {apiUrl} from "../utils";
import {getToken} from "./session";

const getBoards = async (user) => {

    const res = await fetch(`${apiUrl}/boards`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Token token="${user?.token || getToken()}"`,
        },
    });

    const data = await res.json();
    if (res.ok) {
        return data
    } else {
        const data = await res.json();
        return {error: data.errors.message};
    }

};

const saveBoard = async (title, user) => {
    const board = {
        "name": title,
        "closed": false,
        "color": "red",
        "starred": false
    }

    const res = await fetch(`${apiUrl}/boards`, {
        method: "POST",
        body: JSON.stringify(board),
        headers: {
            "content-type": "application/json",
            Authorization: `Token token="${user?.token || getToken()}"`,
        },
    });

    if (res.ok) {
        return await res.json();
    } else {
        const data = await res.json();
        return {error: data.errors.message};
    }

};

const deleteBoard = async (id, user) => {
    const res = await fetch(`${apiUrl}/boards/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            Authorization: `Token token="${user?.token || getToken()}"`,
        },
    });

    if (res.ok) {
        return {data: true};
    } else {
        const data = await res.json();
        return {error: data.errors.message};
    }

};

export  {
    getBoards,
    saveBoard,
    deleteBoard
}