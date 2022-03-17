import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addOnePostThunk } from "../../store/post";



function AddPostForm({ closeModal }) {
    const dispatch = useDispatch();
    //   const { spotId } = useParams();
    const sessionUser = useSelector((state) => state?.session?.user);
//   const spotId = useSelector((state) => state?.spots[spotId]?.spotId);
//   console.log("id!!!!!!!!!!!!!!!!",id)
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [caption, setCaption] = useState('');
    const [imageUrl, setImageUrl] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionUser.id,
      imageUrl,
      caption,
    };
    const newPost = await dispatch(addOnePostThunk(payload));
    if (newPost) {
      history.push(`/`);
      closeModal(false);
    }
    window.location.reload(false)
  }
  
  return (
    <div className="add-post-main-container">
      <div className="add-post-sub-container">
        <h3>Create a new post</h3>
        <form className="add-post-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <div className="add-post-div-container">
              {/* <h4>Uploaded picture preview...</h4> */}
        {imageUrl && (
          <img
            alt='post_preview'
            src={imageUrl}
            // autoComplete="off"
            placeholder="Image URL"
            // required
            onError={(e) =>
              (e.target.src =
                "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg")
            }
          />
        )}
        <div>
          <label> Image </label>
          <input
            id="add-post-label-image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label> Caption </label>
          <textarea
            id="add-post-label-caption"
            placeholder="Caption"
            autoComplete="off"
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

export default AddPostForm;