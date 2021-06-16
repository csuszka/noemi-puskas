import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Main.css';
import ProjectContainer from './ProjectContainer';
import Sidebar from './Sidebar';

function Main() {
  return (
    <Router>
    <div className="main">
      <Sidebar />
      <ProjectContainer />
    </div>
    </Router>
  );
}

export default Main;