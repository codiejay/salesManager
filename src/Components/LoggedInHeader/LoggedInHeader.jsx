import React from 'react';
import './LoggedInHeader.scss';
import userAvatar from '../../Assets/userIcon.svg'
import BigButton from '../BigButton/BigButton';
import { Link } from 'react-router-dom';

const LoggedInHeader = (props) => { 
  
  const avatarStyle = { 
    background: `url(${props.userImg}) no-repeat center/contain`,
    borderRadius: '12px',
    transform: 'scale(0.8)'
  }
  return ( 
    <nav id='nav'>
      <Link to='/store'><div id="menuButton"><div></div></div></Link>
      <div className="userAvatar">
        <div style={avatarStyle}></div>
      </div>
      <button 
        onClick={props.signOut}
      >
        sign out
      </button>
    </nav>
  )
}

export default LoggedInHeader;
