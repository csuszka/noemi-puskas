import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Main.css';
import ProjectContainer from './ProjectContainer';
import Sidebar from './Sidebar';
import AboutContainer from './AboutContainer';

function Main() {
  return (
    <Router>
    <div className="main">
      <Sidebar />
      <Route path="/projects" exact component={ProjectContainer} />
      <Route path="/about" exact component={AboutContainer} />
      <Route path="/" component={AboutContainer} />
    </div>
    </Router>
  );
}

export default Main;