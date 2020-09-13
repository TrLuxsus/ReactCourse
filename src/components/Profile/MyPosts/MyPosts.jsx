import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, message: "Hi, how are you?", likesCount: 2},
        {id:2, message: "Hola", likesCount: 5},
        {id:3, message: "It\'s my first post", likesCount: 3},
    ];

    let postsElements = postsData.map( (p) => (<Post message={p.message} likesCount={p.likesCount}/>))

    return (
        <div className={s.postsBlock}>
            <h3>posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
