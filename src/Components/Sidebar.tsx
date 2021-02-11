import React from 'react';
import './Sidebar.css';
import MenuElement from './MenuElement';

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="profile-picture" src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/1239409_10201795581562337_1590251038_n.jpg"></img>
          <MenuElement />
    </div>

  );
}

export default Sidebar;