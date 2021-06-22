import { useState } from 'react';
import './Project.css';
import defaultThumbnail from '../img/iconmonstr-cursor-7.svg';
import projectViewThumbnail from '../img/iconmonstr-computer-10.svg';
import projectCodeThumbnail from '../img/iconmonstr-code-2.svg';

type Props = {
  projectThumbnail: string | null,
  projectViewLink: string | null,
  projectCodeLink: string | null,
  projectTechnologies: string[] | null,
  projectTools: string[] | null,
}

const Project = ({ projectThumbnail, projectViewLink, projectCodeLink, projectTechnologies, projectTools }: Props) => { //object destructuring!

  const [open, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent): void => {
    //window.location.href='https://nezdanyu.tumblr.com/tagged/tita'
    event.preventDefault();
    alert(open)
  }

  return (
    <div className="project">
      <div className="project-left">

        <div
          className="project-thumbnail"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          style={
            projectThumbnail ? { backgroundImage: `url(${projectThumbnail})` } : { backgroundImage: `url(${defaultThumbnail})`, backgroundSize: '50px' }
          }
        />

        <a
          href="https://nezdanyu.tumblr.com/tagged/tita"
          target="_blank"
          rel="noreferrer">
          <div
            className="project-view"
            style={
              projectViewThumbnail ? { backgroundImage: `url(${projectViewThumbnail})`, backgroundSize: '50px' } : { backgroundImage: `url(${defaultThumbnail})`, backgroundSize: '50px' }
            } />
        </a>

        <button
          className="project-code"
          style={
            projectCodeThumbnail ? { backgroundImage: `url(${projectCodeThumbnail})`, backgroundSize: '50px' } : { backgroundImage: `url(${defaultThumbnail})`, backgroundSize: '50px' }
          } />

      </div>
      <div className="project-right">

      </div>

    </div >
  );
}

export default Project;