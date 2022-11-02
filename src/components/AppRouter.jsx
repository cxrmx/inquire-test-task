import React from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import Error from "./Error";
import PostIdPage from "../pages/PostIdPage";
import EditPost from '../pages/EditPost';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
    );
};

export default AppRouter;
