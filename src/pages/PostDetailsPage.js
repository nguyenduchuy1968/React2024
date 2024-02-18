import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../services";
import {PostDetails} from "../components/PostsContainers/PostDetails";

const PostDetailsPage = () => {
    const [postDetails, setPostDetail] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        postService.getById(id).then(({data}) => setPostDetail(data))
    }, []);
    return (
        <div>
            {postDetails&&<PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};