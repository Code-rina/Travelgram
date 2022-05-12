import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAllPostsThunk } from '../../store/post'




import './AllPosts.css';


function AllPosts(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector((state) => state?.post?.posts)

 
    const user = useSelector((state) => state.session.user.username);
    const [sessionId, setSessionId] = useState()

    
   const allPostsArray = Object.values(allPosts)


    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, [dispatch]);

    if (!user) {
        history.push(`/login`)
    }
    
    
    return (
        <div className="posts-main-container">
            <div className="posts-sub-container">
            {allPostsArray?.sort((a,b)=> (a.id < b.id ? 1 : -1)).map((post) => ( 
                <div className="posts-all-container">
                    <Link id="single-post-link" to={`/posts/${post?.id}`}>
                        <div className="posts-user">{post?.username}</div>
                                <img className='posts-feed-image'
                                    alt={post?.id}
                                    src={post?.image_url}
                                    onError={(e) =>
                                    (e.target.src = "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")} 
                                />
                        <div className='post-caption'>{post?.caption}</div>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}    

export default AllPosts;