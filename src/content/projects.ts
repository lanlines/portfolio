import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and why you built it.',
    tech: ['React', 'TypeScript', 'CSS Modules'],
    image: '/images/projects/project-1.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-one',
    overview: 'A longer description of the project — what problem it solves, who it is for, and what makes it interesting.',
    highlights: [
      'Feature or technical decision one',
      'Feature or technical decision two',
      'Feature or technical decision three',
    ],
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and why you built it.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/projects/project-2.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project-two',
    overview: 'A longer description of the project — what problem it solves, who it is for, and what makes it interesting.',
    highlights: [
      'Feature or technical decision one',
      'Feature or technical decision two',
      'Feature or technical decision three',
    ],
  },
];

export default projects;
