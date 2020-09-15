import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={props.profileImage} alt={"Profile image"}/>
            </div>
            <div className={s.descriptionBlock}>
                {props.profileInfo}
            </div>
        </div>
    )
}

export default ProfileInfo
