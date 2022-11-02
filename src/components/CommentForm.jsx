import React from "react";
import { useState } from "react";
import { useActions } from "../hooks/useAction";
import "./CommentForm.css"

export const CommentForm = ({postId}) => {
    const [commentBody, setCommentBody] = useState('')
    const {createComment} = useActions()

    const onClickHandler = (e) => {
        e.preventDefault()

        const comment = {
            postId,
            body: commentBody
        }
        createComment(comment)
        setCommentBody('')
    }

    return (
        <form className="comment-form">
            <input
                className="comment-form_input"
                value={commentBody}
                onChange={e => setCommentBody(e.target.value)}
                type="text"
                placeholder="Add comment"
            />
            <button type="submit" className="comment-form_btn" onClick={onClickHandler}>Send comment</button>
        </form>
    )
}