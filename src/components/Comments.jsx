import React from "react";
import "./Comments.css"

const Comments = ({comments}) => {


    return (
        <div>
            <h4>COMMENTS:</h4>
            {comments.length > 0 
                ? comments.map(comment => 
                    <div className="comment" key={comment.id}>{comment.body}</div>    
                )
                : <strong>No comments</strong>
            }
        </div>
    )
}

export default Comments