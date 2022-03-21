import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAllCommentsThunk } from '../../store/comment'
import EditCommentModal from '../EditComment/index';
import { deleteOneCommentThunk } from '../../store/comment';

import './GetAllComments.css';


function GetAllComments({id, comment}) {
    const dispatch = useDispatch()
    const history = useHistory()
   
    const allComments = useSelector((state) => state?.comment?.comments)
    console.log("allComments:::::", allComments)
    // console.log("allComments:::::::", allComments)
    const sessionUser = useSelector((state) => state.session?.user);
    // const [sessionId, setSessionId] = useState()
    // const postId = useSelector((state) => state.post[id])
     const allCommentsArray = Object.values(allComments)
     console.log("allCommentsArray:::::::", allCommentsArray)
    // const { id } = useParams()

    const post = useSelector((state) => state.post)
    const userComment = useSelector((state) => state.comment?.comments?.user_id)
    console.log("comment::::::::", comment)

    useEffect(() => {
        dispatch(getAllCommentsThunk())
    }, [dispatch]);

    if (!sessionUser) {
        history.push(`/login`)
    }

    const handleDeleteComment = async(comment, e) => {
        e.preventDefault();
        await dispatch(deleteOneCommentThunk(comment?.id))
        
    }
   
// figure out how to show only comments that are for the specific post
// comment.post_id === post.id 


let filteredCommentsArray = allCommentsArray.filter((oneComment) => {
    return oneComment.post_id === id
})
// console.log("filtered::::::::", allComments)

    return (
     <div className="comments-main-container">

            {filteredCommentsArray?.map((oneComment) => ( 
                <div key={id}>
                    <div>{oneComment.username}</div>
                    <div>{oneComment.comment}</div>
                        <div>
                        {(sessionUser?.id === oneComment?.user_id) ?
                            <EditCommentModal id={id} comment={comment} oneComment={oneComment} />
                       : null }
                       {(sessionUser?.id === oneComment?.user_id) ? 
                        <div>
                            <button className='delete-comment-button' onClick={(e)=>handleDeleteComment(oneComment, e)}>Delete</button>
                        </div>
                        : null}
                        </div>    
                </div>
                    
            ))}
        </div>
    )
}    

export default GetAllComments;