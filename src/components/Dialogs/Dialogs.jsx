import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Gotama
                </div>
                <div className={s.dialog}>
                    Alesha
                </div>
                <div className={s.dialog}>
                    Sashko
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    H
                    </div>
                <div className={s.message}>
                    Who are you?
                </div>
                <div className={s.message}>
                    TT
                </div>
            </div>
        </div>
    )
}

export default Dialogs
