const LOAD_POSTS = "posts/LOAD_POSTS";
const LOAD_POST = 'posts/LOAD_POST';
const ADD_POST = 'posts/ADD_POST';


//----------------------------------

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


//----------------------------------

export const getAllPostsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/posts/`);
    // console.log("response:::::::",response)
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

export const addOnePostThunk = ({userId, imageUrl, caption}) => async (dispatch) => {
    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
        'user_id': userId,
        'image_url': imageUrl,
        caption  
        }) 
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addOnePostAction(data))
        return data
    }
}
//----------------------------------

const initialState = { posts: {}, post: {}}
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
            newState.post = newState.posts
            return newState;
        }
        case ADD_POST: {
            newState = {...state};
            newState.posts = action.post
            console.log("newState::::::", newState)
            return newState;
        }
        default:
            return state
    }    
};

export default postReducer;