import Project from './Project';

let ProjectContainer = () => {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <Project projectThumbnail={null} projectViewLink={null} projectCodeLink={null} projectTechnologies={null} projectTools={null} />
    </div>
  );
}

export default ProjectContainer;