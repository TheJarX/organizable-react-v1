import React from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
        width: 190px;
        height: 96px;
        margin: 16px 0px;
        background:#0079BF;
        border-radius: 3px;
        display: flow-root;
        position: relative;
    `;

const Button = styled.button`
        width: 109px;
        height: 32px;
        background: #02102A;
        border-radius: 3px;
        color: #fff;
        border: none;
        padding: 6px 12px;
        // position: absolute;
    `;

const Input = styled.input`
        width: 154px;
        height: 20px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 3px;
        border: none;
        margin: 10px;
        outline: none;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        padding: 5px;
    `;


export default function BoardForm({title, handleSubmit, handleChange}) {

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <Input value={title} onChange={handleChange} placeholder="Board Title"/>
            </FormContainer>
            <Button>Submit</Button>
        </form>
    )
}