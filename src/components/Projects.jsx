import { useState, forwardRef } from 'react';
import { useInView } from '../hooks/useInView';
import projectsData from '../data/projects';
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';

const FILTER_TYPES = ['Todos', 'Filme', 'Publicidade', 'Institucional'];

const Projects = forwardRef(function Projects(_props, ref) {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, isVisible] = useInView({ threshold: 0.1 });

  const filteredProjects =
    activeFilter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.type === activeFilter);

  return (
    <section ref={ref} id="projects" className={styles.projects} aria-label="Portfólio">
      <div
        ref={sectionRef}
        className={`${styles.projectsInner} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Portfólio</span>
          <h2 className={styles.sectionTitle}>Trabalhos</h2>
          <p className={styles.sectionSubtitle}>
            Layouts 3D e cenografias para filmes, publicidade e projetos audiovisuais
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filterTabs} role="tablist" aria-label="Filtrar projetos">
          {FILTER_TYPES.map((type) => (
            <button
              key={type}
              className={`${styles.filterTab} ${activeFilter === type ? styles.active : ''}`}
              onClick={() => setActiveFilter(type)}
              role="tab"
              aria-selected={activeFilter === type}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Ver detalhes: ${project.title}`}
            >
              <div className={styles.projectImageWrapper}>
                <img
                  src={project.cover}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                  width="800"
                  height="450"
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.projectTag}>{project.type}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <div className={styles.projectViewIcon} aria-hidden="true">
                  ↗
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
});

export default Projects;
