import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addOneCommentThunk } from "../../store/comment";



function AddCommentForm({ closeModal, id }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state?.session?.user);

    const post = useSelector((state) => state.post)
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [comment, setComment] = useState('');
    const [userId, setUserId] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    const payload = {
      userId: sessionUser.id,
      postId: id,
      comment,
    };
    data = await dispatch(addOneCommentThunk(payload));
    if (data) {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        closeModal(false)
      }
    }
  }

  if (!sessionUser) {
    history.push(`/login`)
  }

  useEffect(() => {
    const errors = []
    if(comment?.length > 500) errors.push("Comment must be less than 500 characters.")
    setErrors(errors)
  }, [comment])

  
  return (
    <div className="add-comment-main-container">
      <div className="add-comment-sub-container">
        <h3 className="add-comment-create-new-comment-text">Create a new comment</h3>
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <div className="add-comment-div-container">
          <label> Comment </label>
          <textarea
            id="add-comment-label"
            placeholder="Your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="add-post-create-div">
        <button
            type="submit"
            className="add-post-create-button"
        >
          Add
        </button>
        <button className="cancel-add-button" type="true" onClick={ closeModal }>
          Cancel
        </button>
        </div>
    </form>
    </div>
    </div>
  );
};

export default AddCommentForm;