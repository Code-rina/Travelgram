import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import AddCommentForm from './CreateComment';
import "./CreateComment.css"


function AddCommentModal({id}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='add-comment-button' onClick={() => setShowModal(true)}>Add Comment</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddCommentForm id={id} className='add-post-modal' closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default AddCommentModal;