const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return ""
        default:
            return state;
    }
}

const postsReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.posts
        case "CREATE_POST":
            const newPost = { title: action.title, content: action.content, author: action.author }
            return [newPost, ...state];
        default:
            return state;
    }
}

const errorReducer = (state, action) => {
    switch (action.type) {
        case 'POSTS_ERROR':
            return 'Falied to fetch posts!'
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action),
        error: errorReducer(state.error, action)
    }
}