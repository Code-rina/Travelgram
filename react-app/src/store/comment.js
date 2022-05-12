   const LOAD_COMMENTS = "comments/LOAD_COMMENTS"
   const ADD_COMMENT = "comments/ADD_COMMENT"
   const EDIT_COMMENT = "comments/EDIT_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"


   
   export const loadAllCommentsAction = (comments) => {
       return {
           type: LOAD_COMMENTS,
           comments
       }
   }   

   export const addOneCommentAction = (comment) => {
       return {
           type: ADD_COMMENT,
           comment
       }
   }

   export const editOneCommentAction = (comment) => {
       return {
           type: EDIT_COMMENT,
           comment
       }
   }

export const deleteOneCommentAction = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment
    }
}



   export const getAllCommentsThunk = () => async (dispatch) => {
       const response = await fetch(`/api/comments/`);
       
       if(response.ok) {
           const data = await response.json();
           dispatch(loadAllCommentsAction(data.comments));
           return data.comments
       }
   }

   export const addOneCommentThunk = ({ userId, postId, comment }) => async (dispatch) => {
        const response = await fetch(`/api/comments/addcomment`, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               "user_id": userId,
               "post_id": postId,
               comment
           }),
       })
           
       if(response.ok) {
           const data = await response.json();
           dispatch(addOneCommentAction(data))
           return data
       }
       else if (response.status < 500) {
        const data = await response.json();
        if(data.errors) {
            return data
        }
    }
   }

   export const editOneCommentThunk = ({ comment, id }) => async (dispatch) => {
       const response = await fetch(`/api/comments/editcomment/${id}`, {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               comment
           }),
       })
       if (response.ok) {
           const data = await response.json();
           dispatch(editOneCommentAction(data))
           return data
       }
       else if (response.status < 500) {
        const data = await response.json();
        if(data.errors) {
            return data
        }
    }
   }

export const deleteOneCommentThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/deletecomment/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteOneCommentAction(id))
    }
}



   const initialState = { comments: {} }
   const commentReducer = (state = initialState, action) => {
       let newState;
       switch (action.type) {
           case LOAD_COMMENTS: {
            newState = {...state}
            action.comments.forEach((comment) => {
                newState.comments[comment.id] = comment
            })
            return newState;
           }
           case ADD_COMMENT: {
            newState = {...state};
            newState.comments = {...state.comments, [action.comment.id]: action.comment}
            return newState 
            }
            case EDIT_COMMENT: {
            newState = {...state};
            newState.comments = {...state.comments, [action.comment.id]: action.comment}
            return newState 
            }
            case DELETE_COMMENT: {
                newState = {...state, comments:{...state.comments}};
                delete newState.comments[action.comment]
                return newState;
            }

        default: 
            return state
       }
   }

   export default commentReducer;