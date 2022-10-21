import React, {useEffect} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainerJsx = () => {
    const {data: posts} = postApi.useFetchAllPostsQuery(20);
    const [createPost, {}] = postApi.useCreatePostMutation();
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [deletePost, {}] = postApi.useDeletePostMutation();

    const createHandler = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    const updateHandler = async (post : IPost) => {
        await updatePost(post);
    }

    const deleteHandler = async (post : IPost) => {
        await deletePost(post)
    }

    return (
        <div className='post__list'>
            <button onClick={createHandler}>Add new post</button>
            {posts && posts.map(
                post => <PostItem update={updateHandler} remove={deleteHandler} key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainerJsx;