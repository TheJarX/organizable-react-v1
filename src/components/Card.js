import React from "react";
import styled from "@emotion/styled";
import deleteIcon from "../img/delete.png";

const Title = styled.p`
            fontStyle: normal;
            fontWeight: bold;
            fontSize: 16px;
            lineHeight: 20px;
            color: #fff;
            background: transparent;
            borderRadius: 3px;
            padding: 3px;
            margin: 8px;
            border: none;
            width: 160px;
        `;

const CardContainer = styled.div`
        width: 190px;
        height: 96px;
        // margin: 16px 0px;
        background: #4BBF6B;
        border-radius: 3px;
        display: flow-root;
        position: relative;
    `;

const Button = styled.button`
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 15px;
    `;

export default function Card({card, onDelete}) {
    return (
        <CardContainer>
            <Title>{card.name}</Title>
            <Button onClick={() => onDelete(card.id)}>
                <img src={deleteIcon} alt=""/>
            </Button>
        </CardContainer>
    );
}