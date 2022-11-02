import React, {useEffect, useState} from 'react';
import "./PostItem.css"
import {useActions} from "../hooks/useAction";
import {useNavigate} from "react-router-dom"

const PostItem = ({post, posts, idx}) => {
    const {deletePost} = useActions()
    const router = useNavigate()

    const onDeleteHandler = () => {
        const filteredPosts = posts.filter(el => Number(el.id) !== Number(post.id))

        deletePost(filteredPosts, post.id)
    }

    return (
        <div className="post">
            <h2 className="post_id">Post № {idx + 1}</h2>
            <div className="post_title"><strong>{post.title}</strong></div>
            <div className="post_body">{post.body}</div>
            <div className="post_btns btns">
                <button className='btns_open-btn' onClick={() => router(`/posts/${post.id}`)}>OPEN</button>
                <button className='btns_delete-btn' onClick={onDeleteHandler}>DELETE</button>
                <button className='btns_edit-btn' onClick={() => router(`/posts/${post.id}/edit`)}>EDIT</button>
            </div>
        </div>
    );
};

export default PostItem;
