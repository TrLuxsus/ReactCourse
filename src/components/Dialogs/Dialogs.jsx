import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: "Gotama"},
        {id:2, name: "Alesha"},
        {id:3, name: "Sashko"},
    ];

    let dialogsElements = dialogsData.map( (dialog) => (<DialogItem name={dialog.name} id={dialog.id} />));

    let messagesData = [
        {id:1, message: "Hi"},
        {id:2, message: "Who are you?"},
        {id:3, message: "TT"},
    ];

    let messagesElements = messagesData.map( (message) => (<Message message={message.message} />));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
