import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useAction";
import "./PostList.css"
import PostItem from "./PostItem";

const PostList = () => {
    const {posts, loading, error} = useSelector(state => state.posts)
    const {fetchPosts} = useActions()

    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="posts">
            {posts.map((post, idx) =>
                <PostItem post={post} posts={posts} idx={idx}  key={post.id} />
            )}
        </div>
    );
};

export default PostList;
