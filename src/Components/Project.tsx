import {useState} from 'react';
import './Project.css';
import defaultThumbnail from '../img/iconmonstr-cursor-7.svg';
import projectViewThumbnail from '../img/iconmonstr-code-2.svg';
import projectCodeThumbnail from '../img/iconmonstr-computer-10.svg';

type Props = {
  projectThumbnail: string | null,
}

const Project = ({projectThumbnail}: Props) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="project">
      <div className="project-left">
        <button 
        className="project-thumbnail" 
        style={
          projectThumbnail ? {backgroundImage: `url(${projectThumbnail})`} : {backgroundImage: `url(${defaultThumbnail})`, backgroundSize: '70px'}
          } />
        <button 
        className="project-view" 
        style={
          projectViewThumbnail ? {backgroundImage: `url(${projectViewThumbnail})`} : {backgroundImage: `url(${defaultThumbnail})`, backgroundSize: '70px'}
          } />
                  <button 
        className="project-code" 
        style={
          projectCodeThumbnail ? {backgroundImage: `url(${projectCodeThumbnail})`} : {backgroundImage: `url(${defaultThumbnail})`, backgroundSize: '70px'}
          } />
      </div>
      <div className="project-right">

      </div>

    </div>
  );
}

export default Project;