import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import BoardForm from "./BoardForm";
import CardList from "./CardList";
import {deleteBoard, getBoards, saveBoard} from "../services/boards";
import {Redirect} from "react-router-dom";

const CardHeader = styled.header`
    `;

const CardTiles = styled.div`
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        margin: 20px 0;
    `;


function Dashboard({user}) {
    const [cardTitle, setCardTitle] = useState('');
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        getBoards(user).then(setBoards)
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        saveBoard(cardTitle, user).then(board => setBoards([...boards, board]));
    };

    const onDelete = id => {
        deleteBoard(id, user).then(console.log);
        setBoards(boards.filter(board => board.id !== id));
    };

    return (
        user ?
            <div style={{width: '100vh', margin: "20px auto"}}>
                <CardHeader>
                    <BoardForm title={cardTitle} handleSubmit={handleSubmit}
                               handleChange={e => setCardTitle(e.target.value)}/>
                </CardHeader>
                <CardTiles>
                    <CardList cards={boards} onDelete={onDelete}/>
                </CardTiles>
            </div>
            : <Redirect to="/"/>
    );
}

export default Dashboard;