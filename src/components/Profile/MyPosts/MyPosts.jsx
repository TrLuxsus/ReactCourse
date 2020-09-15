import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map( (p) =>
        (<Post message={p.message}
               likesCount={p.likesCount} postImage={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S0HIURGiO0YtLiB9-4vZ_wHaCl%26pid%3DApi&f=1"}/>))

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
