import React, { useState } from "react";
import './Info.css';

export function Info(props) {

    const borders = ['b1', 'b2', 'b3'];
    const titles = ['t1', 't2', 't3'];
    const texts = ['txt1', 'txt2', 'txt3'];

    const [border, setBorder] = useState(borders[Math.floor(Math.random() * 3)]);
    const [title, setTitle] = useState(titles[Math.floor(Math.random() * 3)]);
    const [text, setText] = useState(texts[Math.floor(Math.random() * 3)]);

    return (
        <div className={border}>
            <h2 className={title}>{props.title}</h2>
            <img src={props.img} />
            <p className={text}>City: {props.city}</p>
            <p className={text}>Year: {props.year}</p>
        </div>
    );
}