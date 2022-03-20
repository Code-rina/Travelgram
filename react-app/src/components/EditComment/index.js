import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditComment';
import "./EditComment"


function EditCommentModal({id, comment}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='edit-comment-button' onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditCommentForm id={id} comment={comment} className='add-comment-modal' closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default EditCommentModal;