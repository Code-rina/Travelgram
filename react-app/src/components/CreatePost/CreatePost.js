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
    // const payload = {
    //   userId: sessionUser.id,
    //   imageUrl,
    //   caption,
    // };
    const formData = new FormData()
    formData.append("image", imageUrl)
    formData.append("caption", caption)
    formData.append("user_id", sessionUser.id)
    console.log("formData:::::::::", formData.values())
    for (var value of formData.values()) {
      console.log(value); 
    }
    // console.log("errors::::", errors)
    // if (errors.length === 0) {
    // console.log("payload:::::", payload)
    data = await dispatch(addOnePostThunk(formData));
    console.log("data:::::::::", data)
    // console.log("result::::", data)
    
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
            {/* <h5 className="add-post-default-img-txt">• If URL image is not found, defaulted image will render.</h5> */}
              {/* <h4>Uploaded picture preview...</h4> */}
        {/* {imageUrl ?? (
          <img
            alt='post_img'
            src={imageUrl}
            // autoComplete="off"
            placeholder="Image URL"
            // required
            onError={(e) =>
              (e.target.src =
                "https://bitsofco.de/content/images/2018/12/broken-1.png")
            }
          />
          )} */}
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