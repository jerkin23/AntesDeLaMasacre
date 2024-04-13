import dayjs from "dayjs";
import { useMemo, useState, } from 'react';
import Modal from 'react-modal';
import '../CalendarModel/CalendarModal.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'




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



    const [ dayOfWeek, setDayOfWeek ] = useState('');     
    const [ formSubmit, setFormSubmit ] = useState(false);
    const [ formValues, setFormValues ] = useState({
        title: '',
        lugar: '',
        start: dayjs().format(), // Fecha y hora actual en formato ISO 8601
        end: dayjs().format(), // Fecha y hora actual en formato ISO 8601
    });

   
        


    const onDateChange = (date, type) => {
        // Actualiza la fecha en el estado
        setFormValues({
          ...formValues,
          [type]: date,
        });
       

        // Obtén el día de la semana
        let dayOfWeek = dayjs(date).day();
      
        // Conviértelo a un string para que sea más legible
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        dayOfWeek = days[dayOfWeek];
      
        // Guarda el día de la semana en el estado
        setDayOfWeek(dayOfWeek);
      };




    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

              

    const onSubmit = (event) => {
        event.preventDefault();
        
        // Obtén los valores del formulario del estado
        const { title, start, end, lugar } = formValues;
       
      
        // Extrae la hora de inicio y finalización

            let startHour = dayjs(start).format('HH:mm'); // Obtén la hora de inicio
            let endHour = dayjs(end).format('HH:mm'); // Obtén la hora de finalización

        // Obtén el día de la semana del estado
        let dayOfWeekState = dayOfWeek; // Asegúrate de que estás guardando el día de la semana en el estado con este nombre
      
        const difference = differenceInSeconds( formValues.end, formValues.start);

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
        console.log(dayOfWeekState);
        console.log(startHour);
        console.log(endHour);
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


<h1> Cancelar evento </h1>
<hr />
<form className="container" >

    <div className="form-group mb-2">
        <label>Titulo</label>
        <input 
        className={ 'form-control' }
        placeholder="Titulo" 
        name="title"
        value={ formValues.title}
        onChange={handleInputChange}
        />
    </div>

    <div className="form-group mb-2">
        <label>Hora inicial</label>
        <DatePicker
            className="form-control"
            selected={formValues.start && dayjs(formValues.start).isValid() ? dayjs(formValues.start).toDate() : new Date()}
            onChange={ (event) => onDateChange(event, 'start')}
            showTimeSelect
            timeIntervals={15}
            dateFormat="Pp"
            
            
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Hora final</label>
        <DatePicker
            className="form-control ti"
            selected={formValues.end && dayjs(formValues.end).isValid() ? dayjs(formValues.end).toDate() : new Date()}
            onChange={ (event) => onDateChange(event, 'end')}
            showTimeSelect
            timeIntervals={15}
            dateFormat="Pp"
            minDate={ formValues.start }
            
        />
       
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
        <span>Cancelar</span>
    </button>

</form>
    </Modal>
  )
}
 
export default CalendarModal;

