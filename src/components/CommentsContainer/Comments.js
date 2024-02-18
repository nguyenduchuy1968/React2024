import React, {useEffect, useState} from 'react';
import {commentService} from "../../services";
import {Comment} from "./Comment";

const Comments = ({postId}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    })
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};