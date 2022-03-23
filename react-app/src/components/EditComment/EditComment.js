import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editOneCommentThunk } from "../../store/comment";
import './EditComment.css'



function EditCommentForm({ closeModal, comment, oneComment}) {
    const dispatch = useDispatch();
 
    // const sessionUser = useSelector((state) => state?.session?.user);
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const {id} = useParams();
    // console.log("id:::::", id)
    const post = useSelector((state) => state?.post[id])
    const [comments, setComments] = useState(oneComment?.comment);
    // const commentId = useSelector((state) => state.comment?.comments?.id)
    // console.log("commentId", id)
    // console.log("commenttttt:::::::", comments)
  
//   console.log("comment::::", comment)

  const handleSubmit = async (e) => {
    let data;
    e.preventDefault();
    const payload = {
        id: oneComment?.id,
        comment: comments,
    };
    // console.log("comment::::", comment)
    // console.log("payload::::::", payload)
    data = await dispatch(editOneCommentThunk(payload));
    if (data) {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        closeModal(false)
        // history.push(`/posts/${id}`)
      }
    }
  }

//   useEffect(() => {
//     dispatch(getOneCommentThunk(id))
//     if(comment) localStorage.setItem("comment", comment?.id)
//   }, [])

//   useEffect(() => {
//     const errors = []
//     if(comment?.length > 2200) errors.push("Caption text must be less than 2,200 characters.")
//     setErrors(errors)
//   }, [caption])
  // if (!user) {
  //   history.push(`/login`)
  // }  

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
              {/* <h4>Uploaded picture preview...</h4> */}
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
        //   disabled={errors.length > 0}
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