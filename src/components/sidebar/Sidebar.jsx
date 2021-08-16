import { NavLink } from 'react-router-dom';
import sidebar_css from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={sidebar_css.nav}>
        <ul>
          <li><NavLink to='/news' activeClassName={sidebar_css.activeLink}>News</NavLink></li>
          <li><NavLink to='/messeges' activeClassName={sidebar_css.activeLink}>Messeges</NavLink></li>
          <li><NavLink to="/profile" activeClassName={sidebar_css.activeLink}>Profile</NavLink></li>
        </ul>
      </div>
    )
}

export default Sidebar;