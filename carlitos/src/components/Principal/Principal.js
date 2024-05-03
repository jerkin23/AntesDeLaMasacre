import "./Principal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import NavBar from "../NavBar/NavBar.js";
import CalendarModal from "../CalendarModel/CalendarModal.js";
import FLoatButton from "../FloatinButton/FloatingButton.js";
import { mockData } from "../../Mock/Mock.js";

function App() {
  const localizer = dayjsLocalizer(dayjs);
  localizer.dayHeaderFormat = "ddd"; // Show only day of week abbreviation

  const [events, setEvents] = useState([]);
  const [personId, setPersonId] = useState("");


  useEffect(() => {
    console.log("Obteniendo datos para la persona con ID:", personId);
  
    // Filtrar eventos por personId y dayOfWeek de mockData
    const eventosFiltrados = mockData.filter(
      (evento) => evento.personId === Number(personId) && evento.dayOfWeekState
    );
    
    const daysOfWeek = {
      'Sunday': 0,
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6
    };

    // Transformar eventos para el calendario
    const eventosCalendario = eventosFiltrados.map((evento) => {
      const now = dayjs();
      const dayOfWeek = daysOfWeek[evento.dayOfWeekState];
      const inicio = now.day(dayOfWeek >= now.day() ? dayOfWeek : dayOfWeek  ).set('hour', evento.start.split(':')[0]).set('minute', evento.start.split(':')[1]).toDate();
      const fin = now.day(dayOfWeek >= now.day() ? dayOfWeek : dayOfWeek ).set('hour', evento.end.split(':')[0]).set('minute', evento.end.split(':')[1]).toDate();
  
      return {
        ...evento,
        start: inicio,
        end: fin,
        title: evento.title,
        lugar: evento.lugar,
      };
    });
    
    setEvents(eventosCalendario);
    
    console.log("Eventos Filtrados: ", eventosCalendario);
  }, [personId]);


  

  const EventComponent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <p>{event.lugar}</p>
    </div>
  );

  return (
    <div className="general__container">

      {/* Pasamos el setPersonId actualizado del use effect */}
      <NavBar onSearchIdChange={setPersonId} />

      <div className="Contenedor">
        <Calendar
          className="Calendar"
          localizer={localizer}
          views={["month", "week", "day"]}
          defaultView="week"
          toolbar={false}
          events={events}
          drilldownView={false}
          onNavigate={() => null}
          min={dayjs("2022-02-07T06:00:00").toDate()}
          max={dayjs("2022-02-13T22:30:00").toDate()}
          formats={{
            dayFormat: "ddd",
            timeFormat: "h:mm",
          }}
          components={{
            event: EventComponent,
          }}
        
        />
      </div>
      <FLoatButton />

      <CalendarModal />
    </div>
  );
}
export default App;
