import React from 'react';
import Post from "./Post";

const Posts = ({posts}) => {
    console.log('11', posts)

    return (
        // <h2>Posts</h2>
        <div>

            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;