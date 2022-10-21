import React from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost,
    update: (post: IPost) => void,
    remove: (post: IPost) => void,
}

const PostItem: React.FC<PostItemProps> = ({post, remove, update}) => {

    const removeHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post);
    }

    const updateHandler = (event: React.MouseEvent) => {
        const title = prompt() || "";
        update({...post,title:title});
    }

    return (
        <div className='post' onClick={updateHandler}>
            {post.id} - {post.title}
            <button onClick={removeHandler}>Delete</button>
        </div>
    );
};

export default PostItem;