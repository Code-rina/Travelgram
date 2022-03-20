import React, { useState } from 'react'
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm';
import "./SignUpForm.css"


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='home-sign-up-button' onClick={() => setShowModal(true)}>Sign up</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignUpForm className='sign-up-modal'/>
          </Modal>
        )}
      </div>
    );
  }

  export default SignUpFormModal;