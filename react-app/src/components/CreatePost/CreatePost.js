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
    console.log("payload:::::", payload)
    const newPost = await dispatch(addOnePostThunk(payload));
    console.log("newPost::::", newPost)
    if (newPost) {
      history.push(`/`);
      closeModal(false);
    }
    // window.location.reload(false)
  }

  if (!sessionUser) {
    history.push(`/login`)
}

  // useEffect(() => {
  //   const errors = []
  //   if(caption?.length > 2200) errors.push("Caption text must be less than 2,200 characters.")
  //   if(imageUrl?.length > 255) errors.push("Valid Image Url has to be less than 255 characters.")
  //   // if(imageUrl?.length === 0) errors.push("Please provide Image Url.")
  //   if(!imageUrl?.includes("http" || "https")) errors.push("Valid Image Url has to start with 'http' or 'https'.")
  //   setErrors(errors)
  // }, [imageUrl, caption])
  
  const imageValidator = (url) => {
    return /\.(png|jpeg|jpg)$/.test(url)
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
        {imageValidator(imageUrl) ?
          <img
            alt='post_preview'
            src={imageUrl}
            // autoComplete="off"
            placeholder="Image URL"
            // required
            onError={(e) =>
              (e.target.src =
                "https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg")
            }
          />
        :
        <img src={"https://i.pinimg.com/564x/a2/3b/ba/a23bba7866bcb9f862b484fbb02fac5c.jpg"} alt="default_img"></img>
        }
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