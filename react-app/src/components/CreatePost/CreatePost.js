import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllPostsThunk, addOnePostThunk } from "../../store/post";




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
    // const [validateErrors, setValidateErrors] = useState([])

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    const payload = {
      userId: sessionUser.id,
      imageUrl,
      caption,
    };
    // console.log("errors::::", errors)
    // if (errors.length === 0) {
    // console.log("payload:::::", payload)
    data = await dispatch(addOnePostThunk(payload));
    // console.log("result::::", data)
    
    if (data) {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        closeModal(false)
        // history.push('/posts/')
      }
    }
  }



    // if (result && result.errors) {
    //   setErrors(result.errors)
    //   console.log("errors::::", errors)
    // }
  
    // if (result) {
    //   // await dispatch(getAllPostsThunk())
    //   history.push(`/`);
    //   closeModal(false);
    // }
    // window.location.reload(false)

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
  
  const url = imageUrl[0]?.url

  const imageValidator = (image) => {
    return /\.(png|jpeg|jpg)$/.test(image)
  }

  return (
    <div className="add-post-main-container">
      <div className="add-post-sub-container">
        <form className="add-post-form" onSubmit={handleSubmit}>
          <ul>
            {errors && errors.map((error, index) => (
              <li key={index}>{error}</li>
              ))}
          </ul>
          <div className="add-post-div-container">
              <h3 className="add-post-create-new-post-text">Create a new post</h3>
              {/* <h4>Uploaded picture preview...</h4> */}
        {imageValidator(url) ?
          <img
            alt='post_img'
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
        <div>
          <label> Image </label>
          <input
            id="add-post-label-image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            />
        </div>
          }
        <div className="add-post-caption-div">
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
          // disabled={errors.length > 0}
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