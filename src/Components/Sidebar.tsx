import React from 'react';
import './Sidebar.css';
import MenuElement from './MenuElement';

import menuImageProjects from '../img/iconmonstr-bookmark-34.svg';
import menuImageExperiments from '../img/iconmonstr-flask-7.svg';
import menuImageAbout from '../img/iconmonstr-help-1.svg';
import menuImageContact from '../img/iconmonstr-email-12.svg';
import menuProfilePicture from '../img/PN.jpg';

function Sidebar () {
  return (
    <div className="sidebar">
      <img className="profile-picture" src={menuProfilePicture} alt="Noémi's face"></img>
      <div className="sidebar-name">
        <p>Noémi Puskás</p>
        <p>web developer</p>
      </div>
      <div className="sidebar-menu">
      <MenuElement menuURL='/projects' menuImageURL={menuImageProjects} menuImageAlt='Projects' MenuText='Projects' />
      <MenuElement menuURL='/experiments' menuImageURL={menuImageExperiments} menuImageAlt='Experiments' MenuText='Experiments' />
      <MenuElement menuURL='/about' menuImageURL={menuImageAbout} menuImageAlt='About' MenuText='About' />
      <MenuElement menuURL='/contact' menuImageURL={menuImageContact} menuImageAlt='Contact' MenuText='Contact' />
      </div>
    </div>

  );
}

export default Sidebar;