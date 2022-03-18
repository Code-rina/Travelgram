import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editOnePostThunk, getOnePostThunk } from "../../store/post";



function EditPostForm({ closeModal }) {
    const dispatch = useDispatch();
 
    // const sessionUser = useSelector((state) => state?.session?.user);
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const {id} = useParams();
    const post = useSelector((state) => state?.post[id])
    const [caption, setCaption] = useState(post?.description);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        id: id,
        caption,
    };
    console.log("payload::::::", payload)
    const editedPost = await dispatch(editOnePostThunk(payload));
    if (editedPost) {
      history.push(`/`);
      closeModal(false);
    }
  }

  useEffect(() => {
    dispatch(getOnePostThunk(id))
    if(caption) localStorage.setItem("caption", post?.id)
  }, [])

  useEffect(() => {
    const errors = []
    if(caption?.length > 2200) errors.push("Caption text must be less than 2,200 characters.")
    setErrors(errors)
  }, [caption])
  
  return (
    <div className="edit-post-main-container">
      <div className="edit-post-sub-container">
        <h3>Edit a post</h3>
        <form className="edit-post-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <div className="edit-post-div-container">
              {/* <h4>Uploaded picture preview...</h4> */}
          <div>
          <label> Caption </label>
          <textarea
            id="edit-post-label-caption"
            placeholder="Caption"
            // autoComplete="on"
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