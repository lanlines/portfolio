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
    description: 'A client-based ERP system that replaces manual purchasing and inventory workflows with a centralized digital system for store attendants, warehouse managers, and administrators.',
    tech: ['JavaScript', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    heroImages: [
      '/images/projects/jsv/heroCard/admin_dashboard.png',
      '/images/projects/jsv/heroCard/admin_login.png',
    ],
    modalImages: [
      '/images/projects/jsv/modal/purchasing.png',
      '/images/projects/jsv/modal/purchase_orders.png',
      '/images/projects/jsv/modal/inventory.png',
      '/images/projects/jsv/modal/inventory_item.png',
    ],
    githubUrl: 'https://github.com/yourusername/jsv-erp',
    overview: 'A client-based ERP system developed to streamline purchasing and inventory management by replacing manual workflows with a centralized digital system. The system improves inventory tracking, item requests, purchasing, and coordination between store attendants, warehouse managers, and administrators.',
    details: 'The system provides role-based workflows for Attendants, Warehouse Managers, and Admins:\n\nInventory Management – Monitor and update store and warehouse stock levels.\n\nItem Requests – Attendants can submit requests for low-stock or needed items, which warehouse managers can process.\n\nPurchasing Workflow – Warehouse managers can request unavailable items from the admin, while admins manage purchasing and vendor-related tasks.\n\nRole-Based Access – Each user role has specific features and permissions based on their responsibilities.\n\nCentralized Monitoring – Admins can oversee store and warehouse inventories, requests, purchases, and users.\n\nImproved Workflow – Replaced phone calls, manual ledgers, and repetitive inventory updates with a structured digital workflow.',
    highlights: [
      'Developed and implemented core Purchasing and Inventory modules.',
      'Designed and implemented improved workflows for item requests, inventory management, and purchasing, reducing manual processes.',
      'Designed and implemented the PostgreSQL database structure and ERD.',
      'Developed both frontend and backend functionality using JavaScript, Django, PostgreSQL, and Tailwind CSS.',
    ],
  },
];

export default projects;
