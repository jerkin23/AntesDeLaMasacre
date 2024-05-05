// MockData.js
export const mockData = [
    {
      personId:  1,
      title: 'Evento 1',
      start: '08:00',
      end: '10:00',
      dayOfWeekState: 'Tuesday',
      lugar: 'Lugar 1',
    },
    {
      personId: 1,
      title: 'Evento 2',
      start: '11:00',
      end: '13:00',
      dayOfWeekState: 'Wednesday',
      lugar: 'Lugar 2',
    },
    {
      personId: 1,
      title: 'Evento 3',
      start: '11:00',
      end: '14:00',
      dayOfWeekState: 'Monday',
      lugar: 'Lugar 3',
    },
    {
      personId: 1,
      title: 'Evento 4',
      start: '14:00',
      end: '18:00',
      dayOfWeekState: 'Thursday',
      lugar: 'Lugar 4',
    },
    {
      personId: 1,
      title: 'Evento 4',
      start: '8:00',
      end: '12:00',
      dayOfWeekState: 'Thursday',
      lugar: 'Lugar 4',
    },
    {
      personId: 1,
      title: 'Evento 5',
      start: '13:00',
      end: '15:00',
      dayOfWeekState: 'Friday',
      lugar: 'Lugar 5',
    },
    {
      personId: 1,
      title: 'Evento 6',
      start: '08:00',
      end: '12:00',
      dayOfWeekState: 'Saturday',
      lugar: 'Lugar 4',
    },
    {
      personId: 3,
      title: 'Evento 3',
      start: '11:00',
      end: '04:00',
      dayOfWeekState: 'Thursday',
      lugar: 'Lugar 3',
    },
    {
      personId:  3,
      title: 'Evento 1',
      start: '08:00',
      end: '10:00',
      dayOfWeekState: 'Tuesday',
      lugar: 'Lugar 1',
    },
    {
      personId: 3,
      title: 'Evento 2',
      start: '11:00',
      end: '13:00',
      dayOfWeekState: 'Wednesday',
      lugar: 'Lugar 2',
    },
    {
      personId: 3,
      title: 'Evento 3',
      start: '11:00',
      end: '14:00',
      dayOfWeekState: 'Monday',
      lugar: 'Lugar 3',
    },
    {
      personId: 3,
      title: 'Evento 4',
      start: '14:00',
      end: '18:00',
      dayOfWeekState: 'Thursday',
      lugar: 'Lugar 4',
    },
    {
      personId: 3,
      title: 'Evento 4',
      start: '8:00',
      end: '12:00',
      dayOfWeekState: 'Thursday',
      lugar: 'Lugar 4',
    },
    {
      personId: 3,
      title: 'Evento 5',
      start: '13:00',
      end: '15:00',
      dayOfWeekState: 'Friday',
      lugar: 'Lugar 5',
    },
    {
      personId: 3,
      title: 'Evento 6',
      start: '08:00',
      end: '12:00',
      dayOfWeekState: 'Saturday',
      lugar: 'Lugar 4',
    },
    // Agrega más eventos según sea necesario
  ];
  export const usuarios = [
    {
        id: 1,
        email: 'usuario1@example.com',
        password: 'password123' // En una aplicación real, nunca almacenes contraseñas en texto plano
    },
    {
        id: 2,
        email: 'usuario2@example.com',
        password: 'password456'
    },
    {
        id: 3,
        email: 'usuario3@example.com',
        password: 'password789'
    },
    // Agrega más usuarios según sea necesario
];
export function login(email, password) {
  return usuarios.find(usuario => usuario.email === email && usuario.password === password);
}