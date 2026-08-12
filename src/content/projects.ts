import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and why you built it.',
    tech: ['React', 'TypeScript', 'CSS Modules'],
    image: '/images/projects/project-1.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and why you built it.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/projects/project-2.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-two',
  },
];

export default projects;
