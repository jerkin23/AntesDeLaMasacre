import * as React from 'react';
import "./Floating.css"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Popover from '@mui/material/Popover';
import { BsCalendar2X } from "react-icons/bs";
import { useState } from 'react';
import { FaEllipsisH } from "react-icons/fa";
import CalendarModal from '../CalendarModel/CalendarModal';
import ModalEdit from '../EditModal/EditModal.js';
import CancelModal from '../CancelModal/CancelModal.js';


export default function FloatingActionButtons() {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openCancelModal = () => {
    setCancelModalOpen(true);
  }

  const closeCancelModal = () => {  
    setCancelModalOpen(false);
  }

  const openEditModal = () => {
    setEditModalOpen(true);
  }
  const closeEditModal = () => {
    setEditModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 580,
      right: 80,
      '& > :not(style)': { m: 1 } 
    }}>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <FaEllipsisH /> 
      </Fab>
      {open && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Fab onClick={openEditModal} color="secondary" aria-label="edit" >
            <EditIcon />
          </Fab>
          <Fab onClick={openCancelModal} color="secondary" aria-label="Cancel" >
            <BsCalendar2X/>
          </Fab>
          <Fab onClick={openModal} color="secondary" aria-label="edit">
              <AddIcon/>
          </Fab>
        </Popover>
      )}

      <CancelModal open={cancelModalOpen} handleOpen={openCancelModal} handleClose={closeCancelModal} />
      <ModalEdit open={editModalOpen} handleOpen={openEditModal} handleClose={closeEditModal} />
      <CalendarModal open={modalOpen} handleOpen={openModal} handleClose={closeModal} />
      
    </Box>
  );
}