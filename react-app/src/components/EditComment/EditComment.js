import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editOneCommentThunk } from "../../store/comment";
import './EditComment.css'



function EditCommentForm({ closeModal, comment, oneComment}) {
    const dispatch = useDispatch();
 
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const {id} = useParams();
    const post = useSelector((state) => state?.post[id])
    const [comments, setComments] = useState(oneComment?.comment);

  const handleSubmit = async (e) => {
    let data;
    e.preventDefault();
    const payload = {
        id: oneComment?.id,
        comment: comments,
    };

    data = await dispatch(editOneCommentThunk(payload));
    if (data) {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        closeModal(false)
      }
    }
  }

  useEffect(() => {
    const errors = []
    if(comments?.length > 500) errors.push("Comment must be less than 500 characters.")
    setErrors(errors)
  }, [comments])


  return (
    <div className="edit-comment-main-container">
      <div className="edit-comment-sub-container">
        <h3 className="edit-comment-edit-comment-text">Edit a comment</h3>
        <form className="edit-comment-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <div className="edit-comment-div-container">
          <div className="edit-comment-label-div">
          <label className="edit-comment-comment"> Comment </label>
          <textarea
            id="edit-comment-label-caption"
            placeholder="Your comment here..."
            // autoComplete="on"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
      </div>
      <div className="edit-comment-create-div">
        <button
            type="submit"
            className="add-post-create-button"
        >
          Submit
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

export default EditCommentForm;