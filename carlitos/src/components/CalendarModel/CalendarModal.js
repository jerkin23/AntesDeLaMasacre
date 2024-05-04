import { useState, } from 'react';
import Modal from 'react-modal';
import './CalendarModal.css';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { differenceInMinutes } from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import "react-datepicker/dist/react-datepicker.css";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      
    },
  };
  
  

  Modal.setAppElement('#root');

 const CalendarModal = ({ open, handleOpen, handleClose }) => {


    
   
    const [ formValues, setFormValues ] = useState({
        title: '',
        lugar: '',
        dayOfWeek: '',
        start: new Date(),
        end: new Date(),
    });

   


    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

              

    const onSubmit = (event) => {
            event.preventDefault();
            const { title, lugar, dayOfWeek, start, end } = formValues;
        
            const startDate = new Date(`1970-01-01T${start}:00`);
            const endDate = new Date(`1970-01-01T${end}:00`);
        
            // Calculate the difference in minutes
            const difference = differenceInMinutes(endDate, startDate);
        
          
           

            if( isNaN(difference) || difference <= 0){
                Swal.fire('Error', 'La fecha de final debe ser menor a la inicial', 'error');
                
                return;
            }
            if ( formValues.title.length <= 0){
                Swal.fire('Error', 'El titulo es obligatorio', 'error');
                return;
            }
            if ( formValues.lugar.length <= 0){
                Swal.fire('Error', 'El lugar es obligatorio', 'error');
                return;
            }
            console.log(dayOfWeek);
            console.log(start);
            console.log(end);
            console.log("🚀 ~ onSubmit ~ lugar:", lugar)
            console.log("🚀 ~ onSubmit ~ title:", title)
        
        // axios.post('https://tu-backend.com/api/ruta', {
        //   title,
        //   start: startHour,
        //   end: endHour,
        //   lugar,
        //   dayOfWeekState,
        // })
        // .then(response => {
        //   console.log(response.data);
        // })
        // .catch(error => {
        //   console.error(error);
        // });
      };

    

  return (
    <Modal 
        isOpen = {open}
       onRequestClose={handleClose}
        style={ customStyles }
        className="modal"
        overlayClassName='modal-fondo'
        
    >

<form className="container" >

<h1> Nuevo evento </h1>

<hr />

    <div className="form-group mb-2">
        <label>Añadir Titulo</label>
        <input 
        className={ 'form-control' }
        placeholder="Titulo" 
        name="title"
        value={ formValues.title}
        onChange={handleInputChange}
        />
    </div>

    <div className="form-group mb-2">
        <select className="select" name="dayOfWeek" value={formValues.dayOfWeek} onChange={handleInputChange}>
            <option value="0">Seleccione un día</option>
            <option value="1">Lunes</option>
            <option value="2">Martes</option>
            <option value="3">Miercoles</option>
            <option value="4">Jueves</option>
            <option value="5">Viernes</option>
            <option value="6">Sabado</option>
        </select>
    </div>

    <hr />

    <div className="form-group mb-2 time group-time">
        <label>Hora inicial</label>
        <select className="select-time" name="start" value={formValues.start} onChange={handleInputChange}>
            <option value="0">Seleccione una hora</option>
            <option value="7:00">7:00am</option>
            <option value="7:15">7:15am</option>
            <option value="7:30">7:30am</option>
            <option value="7:45">7:45am</option>
            <option value="8:00">8:00am</option>
            <option value="8:15">8:15am</option>
            <option value="8:30">8:30am</option>
            <option value="8:45">8:45am</option>
            <option value="9:00">9:00am</option>
            <option value="9:15">9:15am</option>
            <option value="9:30">9:30am</option>
            <option value="9:45">9:45am</option>
            <option value="10:00">10:00am</option>
            <option value="10:15">10:15am</option>
            <option value="10:30">10:30am</option>
            <option value="10:45">10:45am</option>
            <option value="11:00">11:00am</option>
            <option value="11:15">11:15am</option>
            <option value="11:30">11:30am</option>
            <option value="11:45">11:45am</option>
            <option value="12:00">12:00pm</option>
            <option value="12:15">12:15pm</option>
            <option value="12:30">12:30pm</option>
            <option value="12:45">12:45pm</option>
            <option value="13:00">1:00pm</option>
            <option value="13:15">1:15pm</option>
            <option value="13:30">1:30pm</option>
            <option value="13:45">1:45pm</option>
            <option value="14:00">2:00pm</option>
            <option value="14:15">2:15pm</option>
            <option value="14:30">2:30pm</option>
            <option value="14:45">2:45pm</option>
            <option value="15:00">3:00pm</option>
            <option value="15:15">3:15pm</option>
            <option value="15:30">3:30pm</option>
            <option value="15:45">3:45pm</option>
            <option value="16:00">4:00pm</option>
            <option value="16:15">4:15pm</option>
            <option value="16:30">4:30pm</option>
            <option value="16:45">4:45pm</option>
            <option value="17:00">5:00pm</option>
            <option value="17:15">5:15pm</option>
            <option value="17:30">5:30pm</option>
            <option value="17:45">5:45pm</option>
            <option value="18:00">6:00pm</option>
            <option value="18:15">6:15pm</option>
            <option value="18:30">6:30pm</option>
            <option value="18:45">6:45pm</option>
            <option value="19:00">7:00pm</option>
            <option value="19:15">7:15pm</option>
            <option value="19:30">7:30pm</option>
            <option value="19:45">7:45pm</option>
            <option value="20:00">8:00pm</option>
            <option value="20:15">8:15pm</option>
            <option value="20:30">8:30pm</option>
            <option value="20:45">8:45pm</option>
            <option value="21:00">9:00pm</option>
            <option value="21:15">9:15pm</option>
            <option value="21:30">9:30pm</option>
            <option value="21:45">9:45pm</option>
            <option value="22:00">10:00pm</option>
            </select>
    </div>

    <div className="form-group mb-2 time group-time">
        <label>Hora final</label>
        <select className="select-time" name="end" value={formValues.end} onChange={handleInputChange}>
        <option value="0">Seleccione una hora</option>
            <option value="7:00">7:00am</option>
            <option value="7:15">7:15am</option>
            <option value="7:30">7:30am</option>
            <option value="7:45">7:45am</option>
            <option value="8:00">8:00am</option>
            <option value="8:15">8:15am</option>
            <option value="8:30">8:30am</option>
            <option value="8:45">8:45am</option>
            <option value="9:00">9:00am</option>
            <option value="9:15">9:15am</option>
            <option value="9:30">9:30am</option>
            <option value="9:45">9:45am</option>
            <option value="10:00">10:00am</option>
            <option value="10:15">10:15am</option>
            <option value="10:30">10:30am</option>
            <option value="10:45">10:45am</option>
            <option value="11:00">11:00am</option>
            <option value="11:15">11:15am</option>
            <option value="11:30">11:30am</option>
            <option value="11:45">11:45am</option>
            <option value="12:00">12:00pm</option>
            <option value="12:15">12:15pm</option>
            <option value="12:30">12:30pm</option>
            <option value="12:45">12:45pm</option>
            <option value="13:00">1:00pm</option>
            <option value="13:15">1:15pm</option>
            <option value="13:30">1:30pm</option>
            <option value="13:45">1:45pm</option>
            <option value="14:00">2:00pm</option>
            <option value="14:15">2:15pm</option>
            <option value="14:30">2:30pm</option>
            <option value="14:45">2:45pm</option>
            <option value="15:00">3:00pm</option>
            <option value="15:15">3:15pm</option>
            <option value="15:30">3:30pm</option>
            <option value="15:45">3:45pm</option>
            <option value="16:00">4:00pm</option>
            <option value="16:15">4:15pm</option>
            <option value="16:30">4:30pm</option>
            <option value="16:45">4:45pm</option>
            <option value="17:00">5:00pm</option>
            <option value="17:15">5:15pm</option>
            <option value="17:30">5:30pm</option>
            <option value="17:45">5:45pm</option>
            <option value="18:00">6:00pm</option>
            <option value="18:15">6:15pm</option>
            <option value="18:30">6:30pm</option>
            <option value="18:45">6:45pm</option>
            <option value="19:00">7:00pm</option>
            <option value="19:15">7:15pm</option>
            <option value="19:30">7:30pm</option>
            <option value="19:45">7:45pm</option>
            <option value="20:00">8:00pm</option>
            <option value="20:15">8:15pm</option>
            <option value="20:30">8:30pm</option>
            <option value="20:45">8:45pm</option>
            <option value="21:00">9:00pm</option>
            <option value="21:15">9:15pm</option>
            <option value="21:30">9:30pm</option>
            <option value="21:45">9:45pm</option>
            <option value="22:00">10:00pm</option>
            </select>
       
    </div>

    <div className="form-group mb-2">
        <label>Lugar</label>
        <input 
            type="text" 
            className="form-control is-invalid"
            placeholder=" Lugar"
            name="lugar"
            autoComplete="off"
            value={ formValues.lugar }
            onChange={ handleInputChange }
        />
       
    </div>
    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
        onClick={ onSubmit }
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
    </Modal>
  )
}
 
export default CalendarModal;

