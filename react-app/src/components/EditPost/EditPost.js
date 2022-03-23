import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editOnePostAction, editOnePostThunk, getOnePostThunk } from "../../store/post";
import './EditPost.css'



function EditPostForm({ closeModal }) {
    const dispatch = useDispatch();
 
    // const sessionUser = useSelector((state) => state?.session?.user);
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const {id} = useParams();
    const post = useSelector((state) => state?.post[id])
    const [caption, setCaption] = useState(post?.caption);
  
    // console.log("caption::::", caption)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    const payload = {
        id: id,
        caption,
    };
    // console.log("payload::::::", payload)

    // const editedPost = await dispatch(editOnePostThunk(payload));
    // if (editedPost) {
    //   history.push(`/`);
    //   closeModal(false);
    // }
    data = await dispatch(editOnePostThunk(payload));
    // console.log("result::::", data)
    
    if (data) {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        closeModal(false)
        // history.push(`/posts/${id}`)
      }
    }
  }
  
  useEffect(() => {
    dispatch(getOnePostThunk(id))
    if(caption) localStorage.setItem("caption", post?.id)
  }, [])

  useEffect(() => {
    const errors = []
    if(caption?.length > 500) errors.push("Caption text must be less than 500 characters.")
    setErrors(errors)
  }, [caption])
  
  return (
    <div className="edit-post-main-container">
      <div className="edit-post-sub-container">
        <form className="edit-post-form" onSubmit={handleSubmit}>
        <h3 className="edit-post-edit-txt">Edit a post</h3>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <div className="edit-post-div-container">
              {/* <h4>Uploaded picture preview...</h4> */}
          <div className="edit-post-caption-div">
          <label> Caption </label>
          <textarea
            id="edit-post-label-caption"
            placeholder="Your caption here..."
            // autoComplete="off"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
      </div>
      <div className="add-post-create-div">
        <button
            type="submit"
            className="add-post-create-button"
        //   disabled={errors.length > 0}
        >
          Post
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

export default EditPostForm;