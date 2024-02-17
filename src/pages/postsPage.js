import React, {useEffect, useState} from 'react';
import Post from "../components/PostsContainer/Post";
import {useLocation} from "react-router-dom";
import {postService} from "../services/postService";

const PostsPage = () => {
    const [post, setPost] = useState(null)
    const {state: {postId}} = useLocation(); 

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default PostsPage;