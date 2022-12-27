import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoB from '../../assets/images/LogoB-2.png';
import LogoSubtitle from '../../assets/images/LogoSubtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome,faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState (false);

    return (
    
     <div className='nav-bar'>
       <Link className='logo'>
         <img src={LogoB} alt="Logo" />
         <img className="sub-logo" src={LogoSubtitle} alt="barenco" />
       </Link>
         <nav className={showNav ? 'mobile-show' : ''}>
           <NavLink 
              exact="true" activeclassname="active" to="/"
              onClick={() => setShowNav(false)} >
               <FontAwesomeIcon icon={faHome} color="4d4d4e" />
           </NavLink>

           <NavLink 
             exact="true" activeclassname="active" className="about-link" to="/about"
             onClick={() => setShowNav(false)} >
               <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
           </NavLink>

           <NavLink 
              exact="true" activeclassname="active" className="contact-link" to="/contact"
              onClick={() => setShowNav(false)} >
               <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
           </NavLink>

           <FontAwesomeIcon
             onClick={() => setShowNav(false)}
             icon={faClose}
             color='#f16d23'
             size='3x'
             className='close-icon'
             />
       </nav>

       <ul>
        <li>
          <a 
          target="_blank" 
          rel='noreferrer' 
          href='https://www.linkedin.com/in/rodrigobarenco/'
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a 
          target="_blank" 
          rel='noreferrer' 
          href='https://github.com/RodBarenco'
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
       </ul>
       <FontAwesomeIcon
         onClick={() => setShowNav(true)}
         icon={faBars} 
         color="#f16d23"
         size='3x'
         className='hamburguer-icon'
         />
     </div>)
}

export default Sidebar