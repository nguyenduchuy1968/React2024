import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import PostForm from "./PostForm";
import Posts from "./Posts";

const PostsContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    // console.log(posts)
    return (
        // <h1>PostsContainer</h1>
        <div>
            <PostForm setPosts={setPosts}/>
            <hr />
            <Posts  posts={posts} />
        </div>
    );
};

export default PostsContainer;