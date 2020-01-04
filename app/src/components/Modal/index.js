import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-responsive-modal';

Modal.propTypes = {
  modal: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

function Modal({ modal, onClose }) {
  return (
    <ReactModal
      open={modal.open}
      onClose={onClose}
      center
      styles={{
        overlay: {
          backdropFilter: 'blur(20px)',
          background: 'rgba(0, 0, 0, 0.6)'
        },
        modal: {
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '800px',
          width: '100%',
          padding: '50px'
        }
      }}
    >
      {modal.content}
    </ReactModal>
  );
}

export default Modal;
