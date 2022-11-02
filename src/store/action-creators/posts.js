import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({type: "FETCH_POSTS"})
            const response = await axios.get('https://bloggy-api.herokuapp.com/posts')
            dispatch({
                type: "FETCH_POSTS_SUCCESS",
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: "FETCH_POSTS_ERROR",
                payload: 'An error occurred while loading data',
            })
        }
    }
}

export const fetchPost = (postId) => {
    return async (dispatch) => {
        try {
            dispatch({type: "FETCH_POST"})
            const response = await axios.get(`https://bloggy-api.herokuapp.com/posts/${postId}?_embed=comments`)
            dispatch({
                type: "FETCH_POST_SUCCESS",
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: "FETCH_POST_ERROR",
                payload: "An error occurred while loading data"
            })
        }
    }
}

export const createComment = (comment) => {
    const data = JSON.stringify(comment)
    const headers = {
        'Content-Type': 'application/json',
    }

    return async (dispatch) => {
        const response = await axios.post('https://bloggy-api.herokuapp.com/comments', data, {
            headers: headers,
        })
        dispatch({type: "CREATE_COMMENT", payload: response.data})
    }
}

export const createPost = (post) => {
    const data = JSON.stringify(post)
    const headers = {
        'Content-Type': 'application/json',
    }

    return async (dispatch) => {
        const response = await axios.post('https://bloggy-api.herokuapp.com/posts', data, {
            headers: headers,
        })
        dispatch({type: "CREATE_POST", payload: response.data})
    }
}

export const editPost = (post, postId) => {
    const data = JSON.stringify(post)
    const headers = {
        "Content-Type": 'application/json',
    }

    return async (dispatch) => {
        const response = await axios.put(`https://bloggy-api.herokuapp.com/posts/${postId}`, data, {
            headers: headers,
        })
        dispatch({type: "EDIT_POST", payload: response.data})
    }
}

export const deletePost = (posts, id) => {
    return async (dispatch) => {
        const address = 'https://bloggy-api.herokuapp.com/posts/' + id

        const response = await axios.delete(address)
        dispatch({
            type: "DELETE_POST",
            payload: posts
        })
    }
}
