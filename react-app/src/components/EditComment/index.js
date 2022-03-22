import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditComment';
import "./EditComment"


function EditCommentModal({id, comment, oneComment}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='edit-comment-button' onClick={() => setShowModal(true)}>Edit Comment</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditCommentForm id={id} oneComment={oneComment} className='add-comment-modal' closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default EditCommentModal;