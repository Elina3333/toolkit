import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes:["posts"],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags : result => ['posts']
        }),
        createPost : build.mutation<IPost,IPost>({
            query: (post) => ({
                url: '/posts',
                method : 'POST',
                body : post
            }),
            invalidatesTags:['posts']
        }),
        updatePost : build.mutation<IPost,IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method : 'PUT',
                body : post
            }),
            invalidatesTags:['posts']
        }),
        deletePost : build.mutation<IPost,IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method : 'DELETE',
                body : post
            }),
            invalidatesTags:['posts']
        })
    })
})