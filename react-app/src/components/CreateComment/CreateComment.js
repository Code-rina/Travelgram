import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addOneCommentThunk } from "../../store/comment";



function AddCommentForm({ closeModal, id }) {
    const dispatch = useDispatch();
    // const { postId } = useParams();
    // console.log("postId:::::::", postId)
    const sessionUser = useSelector((state) => state?.session?.user);
//   const spotId = useSelector((state) => state?.spots[spotId]?.spotId);
//   console.log("id!!!!!!!!!!!!!!!!",id)
    const post = useSelector((state) => state.post)
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [comment, setComment] = useState('');
    const [userId, setUserId] = useState('')
    // const [postId, setPostId] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionUser.id,
      postId: id,
      comment,
    };
    // console.log("#########", payload)
    const newComment = dispatch(addOneCommentThunk(payload));
    if (newComment) {
      // history.push(`/`);
      closeModal(false);
    }
  }
  if (!sessionUser) {
    history.push(`/login`)
  }

//   useEffect(() => {
//     const errors = []
//     if(caption?.length > 2200) errors.push("Caption text must be less than 2,200 characters.")
//     if(imageUrl?.length > 255) errors.push("Valid Image Url has to be less than 255 characters.")
//     // if(imageUrl?.length === 0) errors.push("Please provide Image Url.")
//     if(!imageUrl?.includes("http" || "https")) errors.push("Valid Image Url has to start with 'http' or 'https'.")
//     setErrors(errors)
//   }, [imageUrl, caption])
  
  return (
    <div className="add-comment-main-container">
      <div className="add-comment-sub-container">
        <h3>Create a new comment</h3>
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <div className="add-comment-div-container">
          <label> Comment </label>
          <input
            id="add-comment-label"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
            type="submit"
            className="add-post-create-button"
        //   disabled={errors.length > 0}
        >
          Add
        </button>
        <button className="cancel-add-button" type="true" onClick={ closeModal }>
          Cancel
        </button>
    </form>
    </div>
    </div>
  );
};

export default AddCommentForm;