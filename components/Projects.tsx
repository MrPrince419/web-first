import React from 'react';
import { useData } from '../hooks/useData';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = React.memo(({ project }: { project: Project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="technologies">
      {project.technologies.map((tech) => (
        <span key={tech} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  </div>
));

function Projects() {
  const { data, loading, error } = useData<Project[]>('/api/projects');

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error.message}</div>;
  if (!data) return null;

  return (
    <div className="projects-grid">
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
