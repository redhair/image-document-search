import React from 'react';
import LoadingBlock from '../components/LoadingBlock';
import * as s3 from '../api/s3';
import { createImage } from '../api/images';

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  };
};

export const setModalContent = content => {
  return {
    type: 'SET_MODAL_CONTENT',
    content: content
  };
};

export const showToast = toastProps => {
  return {
    type: 'SHOW_TOAST',
    toastProps: toastProps
  };
};

export const hideToast = () => {
  return {
    type: 'HIDE_TOAST'
  };
};

export const uploadImage = image => {
  return function(dispatch) {
    dispatch(
      showToast({
        level: 'info',
        message: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <img
              style={{ width: '100px', marginRight: '18px' }}
              src={URL.createObjectURL(image)}
              alt={image.name}
            />
            <span style={{ whiteSpace: 'nowrap' }}>
              Uploading {image.name}
            </span>
            <LoadingBlock
              small
              quiet
              style={{ marginLeft: '12px' }}
            />
          </div>
        )
      })
    );

    return s3
      .uploadImage(image)
      .then(uploaded => {
        return createImage(uploaded)
          .then(res => {
            dispatch(
              showToast({
                level: 'success',
                message: 'Successfully Uploaded!'
              })
            );

            setTimeout(function() {
              dispatch(hideToast());
            }, 1000);
          })
          .catch(err => {
            dispatch(
              showToast({
                level: 'danger',
                message: 'Failed to upload image'
              })
            );
          });
      })
      .catch(err => {
        dispatch(
          showToast({
            level: 'danger',
            message: 'Failed to upload image'
          })
        );
      });
  };
};
