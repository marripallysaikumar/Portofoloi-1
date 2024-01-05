// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <h1 className="title">Madelyn</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/projects">
          Projects
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/addProjects">
          AddProjects
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contacts
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
