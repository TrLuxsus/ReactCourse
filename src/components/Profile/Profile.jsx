import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profileInfo={"ava + description"}
                         profileImage={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F4%2F46%2FIMG_Academy_Logo.jpg%2F220px-IMG_Academy_Logo.jpg&f=1&nofb=1"}/>
            <MyPosts postsData={props.state.postsData} newPostText={props.state.newPostText} addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
)
}

export default Profile
