import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useActions} from "../hooks/useAction";
import {useSelector} from "react-redux";
import Comments from '../components/Comments';
import { CommentForm } from '../components/CommentForm';
import './PostIdPage.css'

const PostIdPage = () => {
    const {fetchPost} = useActions()
    const {post, loading, error} = useSelector(state => state.posts)
    const params = useParams()

    const router = useNavigate()

    useEffect(() => {
        fetchPost(params.id)
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='post-id-page'>
            <h3 className="post-id-page_title">{post.title}</h3>
            <div className="post-id-page_body">{post.body}</div>
            <button className='post-id-page_btn' onClick={() => router('/posts')}>Back to posts</button>
            {post.comments && 
                <Comments comments={post.comments} />
            }
            <CommentForm 
                postId={post.id}
            />
        </div>
    );
};

export default PostIdPage;
