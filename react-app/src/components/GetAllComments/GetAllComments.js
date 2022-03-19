import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAllCommentsThunk } from '../../store/comment'


import './GetAllComments.css';


function GetAllComments({id}) {
    const dispatch = useDispatch()
    const history = useHistory()
   
    const allComments = useSelector((state) => state?.comment?.comments)
    console.log("allComments:::::", allComments)
    // console.log("allComments:::::::", allComments)
    const user = useSelector((state) => state.session.user);
    // const [sessionId, setSessionId] = useState()
    // const postId = useSelector((state) => state.post[id])
    //  const allCommentsArray = Object.values(allComments)
    //  console.log("allCommentsArray:::::::", allCommentsArray)
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

            {Object.values(allComments)?.map((comment, i) => { if (comment.post_id === id) 
                return (<div key={i}><div>{comment.id}</div><div>{comment.comment}</div></div>)}
                        
                    
            )}
        </div>
    )
}    

export default GetAllComments;