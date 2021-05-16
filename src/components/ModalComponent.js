import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditForm from './EditForm'

const ModalComponent = (props) => {
  const {
    className,
    modal,
    toggle,
    editData
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Customer Details</ModalHeader>
        <ModalBody>
            <EditForm toggle={toggle} editData={editData}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalComponent;