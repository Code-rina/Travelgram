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
    const sessionUser = useSelector((state) => state.session?.user);

    const [filteredCommentsArray, setFilteredCommentsArray] = useState([])
    const post = useSelector((state) => state.post)
    const userComment = useSelector((state) => state.comment?.comments?.user_id)


    
    useEffect(() => {
        
        const allCommentsArray = Object.values(allComments)
        setFilteredCommentsArray(allCommentsArray.filter((oneComment) => {
            return oneComment.post_id === id
        }))
    }, [allComments]);

    if (!sessionUser) {
        history.push(`/login`)
    }

    const handleDeleteComment = async(comment, e) => {
        e.preventDefault();
        await dispatch(deleteOneCommentThunk(comment?.id))
        
    }
   

    return (   
     <div className="comments-main-container">

            {filteredCommentsArray?.map((oneComment) => ( 
                <div className="comments-sub-container" key={id}>
                    <div className="add-comment-username-txt">{oneComment.username}</div>
                    <div className="comments-comment">{oneComment.comment}</div>
                        <div className="comments-box">
                        {(sessionUser?.id === oneComment?.user_id) ?
                            <EditCommentModal id={id} comment={comment} oneComment={oneComment} />
                       : null }
                       {(sessionUser?.id === oneComment?.user_id) ? 
                        <div>
                            <button className='delete-comment-button' onClick={(e)=>handleDeleteComment(oneComment, e)}>Delete Comment</button>
                        </div>
                        : null}
                        </div>    
                </div>
                    
            ))}
        </div>
    )
}    

export default GetAllComments;