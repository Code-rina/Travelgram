import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAllCommentsThunk } from '../../store/comment'


import './GetAllComments.css';


function GetAllComments() {
    const dispatch = useDispatch()
    const history = useHistory()
   
    const allComments = useSelector((state) => state?.comment)
    console.log("allComments:::::::", allComments)
    const user = useSelector((state) => state.session.user);
    // const [sessionId, setSessionId] = useState()
    // const postId = useSelector((state) => state.post[id])
     const allCommentsArray = Object.values(allComments)
     console.log("allCommentsArray:::::::", allCommentsArray)
    // const { id } = useParams()

    const post = useSelector((state) => state.post)

   

    useEffect(() => {
        dispatch(getAllCommentsThunk())
    }, [dispatch]);

    if (!user) {
        history.push(`/login`)
    }

   
    

// figure out how to show only comments that are for the specific post
// comment.post_id === post.id

    return (
     <div className="comments-main-container">
            {allCommentsArray.map((comment) => 
                
                    <div className="posts-all-container">
                        <div className="posts-user">{comment?.id}</div>
                        <div className='post-caption'>{comment?.comment}</div>
                        
                    </div>
            
            )}
            
        </div>
    )
}    

export default GetAllComments;