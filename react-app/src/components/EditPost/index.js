// import React, { useState } from 'react'
// import { Modal } from '../../context/Modal';
// import EditPostForm from './EditPost';
// import "./EditPost"


// function EditPostModal() {
//     const [showModal, setShowModal] = useState(false);

//     return (
//       <div>
//         <button className='edit-post-button' onClick={() => setShowModal(true)}><i class="fa-solid fa-ellipsis"></i></button>
//         {showModal && (
//           <Modal onClose={() => setShowModal(false)}>
//             <EditPostForm className='add-post-modal' closeModal={() => setShowModal(false)}/>
//           </Modal>
//         )}
//       </div>
//     );
//   }

//   export default EditPostModal;