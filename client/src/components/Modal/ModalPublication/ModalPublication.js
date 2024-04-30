import React from 'react';
import { Modal, Grid } from 'semantic-ui-react';
import './ModalPublication.scss';

export default function ModalPublication(props) {
    const {show, setshow, publication} = props;
  return (
    <Modal open={show} onClose={setshow} className='modal-publication '>
        <h1>modal</h1>
    </Modal>
  )
}
