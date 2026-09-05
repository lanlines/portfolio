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
      '/images/projects/tartrack/modal/chat_screen.png',
      '/images/projects/tartrack/modal/conceptual_db.png',
    ],
    githubUrl: 'https://github.com/lanlines/tartrack',
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
      // '/images/projects/jsv/modal/erd.jpg',

    ],
    githubUrl: 'https://github.com/lanlines/jsv-erp',
    overview: 'A client-based ERP system developed to streamline purchasing and inventory management by replacing manual workflows with a centralized digital system. The system improves inventory tracking, item requests, purchasing, and coordination between store attendants, warehouse managers, and administrators.',
    details: 'The system provides role-based workflows for Attendants, Warehouse Managers, and Admins:\n\nInventory Management – Monitor and update store and warehouse stock levels.\n\nItem Requests – Attendants can submit requests for low-stock or needed items, which warehouse managers can process.\n\nPurchasing Workflow – Warehouse managers can request unavailable items from the admin, while admins manage purchasing and vendor-related tasks.\n\nRole-Based Access – Each user role has specific features and permissions based on their responsibilities.\n\nCentralized Monitoring – Admins can oversee store and warehouse inventories, requests, purchases, and users.\n\nImproved Workflow – Replaced phone calls, manual ledgers, and repetitive inventory updates with a structured digital workflow.',
    highlights: [
      'Developed and implemented core Purchasing and Inventory modules.',
      'Designed and implemented improved workflows for item requests, inventory management, and purchasing, reducing manual processes.',
      'Designed and implemented the PostgreSQL database structure and ERD.',
      'Developed both frontend and backend functionality using JavaScript, Django, PostgreSQL, and Tailwind CSS.',
    ],
  },
  {
    title: 'Personal Shopping App',
    description: 'An offline-first mobile app for tracking grocery shopping expenses and comparing item prices across stores with no accounts, no cloud sync, and all data stored locally on your device.',
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Expo Router', 'Zustand'],
    heroImages: [
      '/images/projects/shoppingApp/dashboard.jpg',
      '/images/projects/shoppingApp/shopping-session.jpg',
    ],
    modalImages: [
      // Placeholder images
    ],
    githubUrl: 'https://github.com/lanlines/personal-shopping-app',
    overview: 'An offline-first mobile app designed for personal use that helps you track grocery shopping expenses and compare item prices across different stores. With no accounts, no cloud sync, and no internet required—all data stays on your device.',
    details: 'Shopping Sessions – Start a shopping session at a store with a budget, add items in real-time with a quantity stepper, and track running totals and budget remaining with a visual progress bar.\n\nPrice Comparison – Compare prices for the same item across different stores to find the cheapest option.\n\nTransaction History – Complete archive of past shopping trips with receipt view showing store, date, items, and budget vs. actual spending.\n\nStore Management – Manage your list of stores and update item prices per store.\n\nItem Catalog – Browse all items with price stats (latest, cheapest, average) and store availability.\n\nFavorites – Star items to prioritize them in searches and lists.\n\nArchitecture – Built with a repository pattern for data access with explicit error handling, versioned migrations for schema management, and a feature-first folder structure.',
    highlights: [
      'Designed and implemented an offline-first architecture with local SQLite storage for complete data privacy.',
      'Built responsive UI with React Native and Expo Router for seamless navigation.',
      'Implemented price comparison and transaction history features for expense tracking.',
      'Used Zustand for efficient state management of UI and shopping session data.',
    ],
  },
];

export default projects;
