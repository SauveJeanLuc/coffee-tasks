import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'flowbite-react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DeletionDialog({ show, closeDialog, handleDelete, index }) {
  return (
    <>
      <Modal show={show} size='md' popup={true} onClose={closeDialog}>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            {/* <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
             */}

            <FontAwesomeIcon className='pb-6 text-coffeeDark' icon={faTrash} size='3x' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this task?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='warning' onClick={() => handleDelete(index)}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={closeDialog}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

DeletionDialog.PropTypes = {
  show: PropTypes.bool,
  handleDelete: PropTypes.func,
  index: PropTypes.number,
  closeDialog: PropTypes.func,
};
