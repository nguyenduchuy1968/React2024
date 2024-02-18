import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {userId, id, title} = post;

    return (
        <div>
            <div> userId: {userId}</div>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>post details</button>
        </div>
    );
};

export {Post};