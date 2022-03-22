import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAllPostsThunk } from '../../store/post'
// import GetAllComments from '../GetAllComments/GetAllComments'



import './AllPosts.css';


function AllPosts(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector((state) => state?.post?.posts)
    // console.log("allPosts::::::", allPosts)
 
    const user = useSelector((state) => state.session.user.username);
    const [sessionId, setSessionId] = useState()

    
    // const { id } = useParams()

   const allPostsArray = Object.values(allPosts)
//    console.log("allPostsArray::::::", allPostsArray)

   

    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, [dispatch]);

    if (!user) {
        history.push(`/login`)
    }
 // https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg
    return (
        <div className="posts-main-container">
            {allPostsArray?.sort((a,b)=> (a.id < b.id ? 1 : -1)).map((post) => ( 
                <div className="posts-all-container">
                    <Link id="single-post-link" to={`/posts/${post?.id}`}>
                        <div className="posts-user">{post?.username}</div>
                                <img className='posts-feed-image'
                                    alt={post?.id}
                                    src={post?.image_url}
                                    onError={(e) =>
                                    (e.target.src = "https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg")} 
                                />
                                {/* <GetAllComments id={post.id} /> */}
                        
                        <div className='post-caption'>{post?.caption}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}    

export default AllPosts;