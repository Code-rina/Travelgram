const LOAD_POSTS = "posts/LOAD_POSTS";



//----------------------------------

export const loadAllPostsAction = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
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

//----------------------------------

const initialState = { posts: {} }
const postReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_POSTS: {
            newState = {...state};
            newState.posts = action.posts
            return newState;
        }
        default:
            return state
    }    
};

export default postReducer;