const LOAD_POSTS = "posts/LOAD_POSTS";
const LOAD_POST = 'posts/LOAD_POST';


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

//----------------------------------

const initialState = { posts: {}, post: {} }
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
        default:
            return state
    }    
};

export default postReducer;