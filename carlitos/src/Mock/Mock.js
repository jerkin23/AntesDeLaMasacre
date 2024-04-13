// export const horarios = [
//     //[
//         {
//             id: 1,
//             start: "2024-03-25T10:00:00",
//             end: "2024-03-25T12:00:00",
//             title: "Tittle 1"
//         },
//         {
//             id: 1,
//             start: "2024-03-27T10:00:00",
//             end: "2024-03-27T12:00:00",
//             title: "Tittle 2"
//         },
//     //],
//     //[
//         {
//             id: 2,
//             start: "2024-03-27T13:00:00",
//             end: "2024-03-27T16:00:00",
//             title: "Tittle 3"
//         },
//         {
//             id: 2,
//             start: "2024-03-28T13:00:00",
//             end: "2024-03-28T16:00:00",
//             title: "Tittle 4"
//         },
//         {
//             id: 2,
//             start: "2024-03-28T20:00:00",
//             end: "2024-03-28T22:00:00",
//             title: "Tittle 5"
//         }
//     //]
// ];
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
      end: '14:00',
      dayOfWeekState: 'Wednesday',
      lugar: 'Lugar 2',
    },
    {
      personId: 3,
      title: 'Evento 3',
      start: '11:00',
      end: '15:00',
      dayOfWeekState: 'Thursday',
      lugar: 'Lugar 3',
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