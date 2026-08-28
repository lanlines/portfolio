import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'TarTrack',
    description: 'A real-time booking platform for Cebu\'s heritage tartanilla carriages connecting riders, drivers, and fleet operators through a unified live API.',
    tech: ['React Native', 'React', 'Django', 'Node.js', 'Socket.IO', 'PostgreSQL', 'REST API', 'Expo'],
    heroImages: [
      '/images/projects/tartrack/heroCard/tourist-home-screen.png',
      '/images/projects/tartrack/heroCard/tourist-ride-hailing.png',
      '/images/projects/tartrack/heroCard/admin_dashboard.png',
    ],
    modalImages: [
      '/images/projects/tartrack/modal/admin_chat_screen.png',
      '/images/projects/tartrack/modal/chat_room_screen.jpg',
      '/images/projects/tartrack/modal/chat_screen.png',
      '/images/projects/tartrack/modal/conceptual_db.png',
    ],
    githubUrl: 'https://github.com/yourusername/tartrack',
    overview: 'Before Uber, there was the tartanilla Cebu\'s heritage horse-drawn carriage, woven into the city\'s soul for over a century. TarTrack brings this legacy into the digital age: a real-time booking platform where riders book rides, drivers manage trips, and fleet operators command the whole operation all connected through a unified real-time API.',
    details: 'TarTrack is a multi-platform booking ecosystem purpose-built for Cebu\'s iconic tartanilla tourism industry. Three subsystems a React web app for tourists, a React Native mobile app for drivers, and an admin dashboard for fleet operators all synchronized through a shared Node.js API layer with Socket.IO real-time communication.\n\nAt its core is a real-time ride lifecycle: a tourist opens the web app, sees nearby carriages moving on a live map, books with dynamic pricing that responds to demand, and watches their assigned driver navigate Cebu\'s streets in real time. The driver receives the request on their mobile app, navigates to the pickup, completes the ride, and their earnings update instantly.\n',
    highlights: [
      'Designed and implemented a PostgreSQL database structure and model ERD',
      'Developed and implemented real-time Communication between users to users ',
    ],
  },
  {
    title: 'JSV ERP',
    description: 'A client-based enterprise resource planning system with purchasing and inventory modules, built to reduce manual processes and improve workflow tracking.',
    tech: ['JavaScript', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/projects/jsv/heroCard/dashboard.png',
    modalImages: [],
    githubUrl: 'https://github.com/yourusername/jsv-erp',
    overview: 'A placeholder overview for JSV ERP.',
    highlights: [
      'Developed core purchasing and inventory modules',
      'Designed and implemented improved workflow reducing manual processes',
      'Designed and implemented PostgreSQL database structure and ERD',
    ],
  },
];

export default projects;
