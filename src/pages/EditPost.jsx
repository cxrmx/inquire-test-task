import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useAction";
import {useNavigate} from "react-router-dom"
import "./EditPost.css"

export default function EditPost() {
    const {editPost} = useActions()
    const {posts} = useSelector(state => state.posts)
    const params = useParams()
    const router = useNavigate()

    const prevPost = posts.find(post => post.id == params.id)

    const [post, setPost] = useState({
        title: prevPost.title,
        body: prevPost.body
    })

    const onClickHandler = (e) => {
        e.preventDefault()
        editPost(post, params.id)
        router(`/posts`)
    }

    return (
        <form className="edit-post">
            <textarea
                className="edit-post_title"
                style={{width: "100%"}}
                value={post.title}
                onChange={(e) => setPost(prevPost => ({
                    ...prevPost,
                    title: e.target.value,
                }))}
            />
            <textarea 
                className="edit-post_body"
                style={{width: "100%", }}
                value={post.body}
                onChange={(e) => setPost(prevPost => ({
                    ...prevPost,
                    body: e.target.value,
                }))}
            />
            <button className="edit-post_btn" onClick={onClickHandler}>Edit</button>
        </form>
    )
}