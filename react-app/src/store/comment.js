import { deleteOnePostThunk } from "./post";

   const LOAD_COMMENTS = "comments/LOAD_COMMENTS"

   //----------------------------------
   
   export const loadAllCommentsAction = (comments) => {
       return {
           type: LOAD_COMMENTS,
           comments
       }
   }   

   //----------------------------------

   export const getAllCommentsThunk = () => async (dispatch) => {
       const response = await fetch(`/api/comments/`);
       
       if(response.ok) {
           const data = await response.json();
           dispatch(loadAllCommentsAction(data.comments));
           return data.comments
       }
   }


   //----------------------------------


   const initialState = { comments: {} }
   const commentReducer = (state = initialState, action) => {
       let newState;
       switch (action.type) {
           case LOAD_COMMENTS: {
            newState = {...state}
            action.comments.forEach((comment) => {
                newState[comment.id] = comment
                console.log("comment:::::", comment)
            })
            console.log("newState::::", newState)
            return newState;
           }
           default: 
           return state
       }
   }

   export default commentReducer;