import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllPostsThunk, addOnePostThunk } from "../../store/post";




function AddPostForm({ closeModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state?.session?.user);

    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [caption, setCaption] = useState('');
    const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;

    const formData = new FormData()
    formData.append("image", imageUrl)
    formData.append("caption", caption)
    formData.append("user_id", sessionUser.id)

    for (var value of formData.values()) {
      console.log(value); 
    }
  
    data = await dispatch(addOnePostThunk(formData));
    
    if (data) {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        closeModal(false)
        history.push('/')
      }
    }
  }

  const eventListenerFunc = event => {
    setImageUrl(event.target.files[0])
  }


  if (!sessionUser) {
    history.push(`/login`)
}


  useEffect(() => {
    const errors = []
    if(caption?.length > 500) errors.push("Caption text must be less than 500 characters.")
    setErrors(errors)
  }, [caption])

  return (
    <div className="add-post-main-container">
      <div className="add-post-sub-container">
        <form className="add-post-form" onSubmit={handleSubmit}>
        <h3 className="add-post-create-new-post-text">Create a new post</h3>
          <ul>
            {errors && errors.map((error, index) => (
              <li key={index}>{error}</li>
              ))}
          </ul>
          <div className="add-post-div-container">
        <div>
          <label className="add-post-label-txt"> Image </label>
          <input
            id="add-post-label-image"
            placeholder="Your Image url here..."
            type="file"
            accept="image/*"
            onChange={eventListenerFunc}
            />
        </div>
          
        <div className="add-post-caption-div">
          <label className="add-post-label-txt"> Caption </label>
          <textarea
            id="add-post-label-caption"
            placeholder="Your caption here..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
      </div>
      <div className="add-post-create-div">
        <button
            type="submit"
            className="add-post-create-button"
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

export default AddPostForm;