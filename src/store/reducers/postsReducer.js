const initialState = {
    posts: [],
    post: {},
    error: null,
    loading: false
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_POSTS":
            return {...state, loading: true}
        case "FETCH_POSTS_SUCCESS":
            return {...state, loading: false, posts: action.payload}
        case "FETCH_POSTS_ERROR":
            return {...state, loading: false, error: action.payload}
        case "FETCH_POST":
            return {...state, loading: true}
        case "FETCH_POST_SUCCESS":
            return {...state, loading: false, post: action.payload}
        case "FETCH_POST_ERROR":
            return {...state, loading: false, error: action.payload}
        case "CREATE_POST":
            return {...state, posts: [...state.posts, action.payload]}
        case "EDIT_POST":
            const newPosts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })

            return {...state, posts: newPosts}
        case "CREATE_COMMENT":
            return {...state, post: {
                ...state.post,
                comments: [...state.post.comments, action.payload]
            }}
        case "DELETE_POST":
            return {...state, posts: action.payload}
        default:
            return state
    }
}
