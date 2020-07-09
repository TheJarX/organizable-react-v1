import React from "react";
import Card from "./Card";

export default function CardList({cards, onDelete}) {
    return cards.map(card => <Card card={card} key={card.id} onDelete={onDelete}/>);
}