import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import AddPostForm from './CreatePost';
import "./CreatePost.css"


function AddPostModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='add-post-button' onClick={() => setShowModal(true)}><i class="fa-solid fa-square-plus"></i></button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddPostForm className='add-post-modal' closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default AddPostModal;