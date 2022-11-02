import React, {useEffect, useState} from 'react';
import {useActions} from "../hooks/useAction";
import "./PostForm.css"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const {createPost} = useActions()

    const onClickHandler = (e) => {
        e.preventDefault()
        createPost(post)
        setPost({title: '', body: ''})
    }

    return (
        <form className="post-form">
            <input
                className="post-form__title"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <input
                className="post-form__body"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <button className="post-form__button" onClick={onClickHandler}>Создать пост</button>
        </form>
    );
};

export default PostForm;
