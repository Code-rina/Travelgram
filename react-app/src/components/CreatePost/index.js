import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import AddPostForm from './CreatePost';
import { IoMdAdd } from 'react-icons/io'
import "./CreatePost.css"


function AddPostModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='add-post-button' onClick={() => setShowModal(true)}><IoMdAdd /></button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddPostForm className='add-post-modal' closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default AddPostModal;