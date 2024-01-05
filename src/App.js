import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/addProjects" component={AddProject} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
