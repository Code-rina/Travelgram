const LOAD_POSTS = "posts/LOAD_POSTS";
const LOAD_POST = 'posts/LOAD_POST';
const ADD_POST = 'posts/ADD_POST';
const EDIT_POST = 'posts/EDIT_POST';
const DELETE_POST = 'posts/DELETE_POST';


export const loadAllPostsAction = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    };
};

export const loadOnePostAction = (post) => {
    return {
        type: LOAD_POST,
        post
    };
};

export const addOnePostAction = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

export const editOnePostAction = (post) => {
    return {
        type: EDIT_POST,
        post
    }
}

export const deleteOnePostAction = (post) => {
    return {
        type: DELETE_POST,
        post
    }
}



export const getAllPostsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/posts/`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllPostsAction(data.posts));
        return response
    }
};   

export const getOnePostThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(loadOnePostAction(data))
        return data
    }
}

export const addOnePostThunk = (payload) => async (dispatch) => {
    const response = await fetch(`/api/posts/addpost`, {
        method: 'POST',
        body: payload,
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addOnePostAction(data))
        return data
    }
    else if (response.status < 500) {
        const data = await response.json();
        if(data.errors) {
            return data
        }
    }
}


export const editOnePostThunk = ({ caption, id}) => async (dispatch) => {
    
    const response = await fetch(`/api/posts/editpost/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            caption
        }),
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(editOnePostAction(data))
        return data
    }
    else if (response.status < 500) {
        const data = await response.json();
        if(data.errors) {
            return data
        }
    }
}

export const deleteOnePostThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/deletepost/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteOnePostAction(id))
    }
}


const initialState = { posts: {} }
const postReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_POSTS: { 
            newState = {...state};
            newState.posts = action.posts
            return newState;
        }
        case LOAD_POST: {
            newState = {...state};
            newState[action.post.id] = action.post
            return newState;
        }
        case ADD_POST: {
            newState = {...state};
            newState.posts = {...state.posts, [action.post.id]: action.post}
            return newState;
        }
        case EDIT_POST: {
            newState = {...state};
            newState[action.post.id] = action.post
            return newState;
        }  
        case DELETE_POST: {
            newState = {...state};
            delete newState.posts[action.post]
            return newState;
        }

        default:
            return state
    }    
};

export default postReducer;