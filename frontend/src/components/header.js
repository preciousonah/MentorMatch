import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/header-logo.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='topRow'>
                <img className='header-logo' src={ headerLogo } alt='header logo' height={75} />
                <div className='icons'>
                    <FontAwesomeIcon className='icon' icon={ faBell } size='3x' />
                    <FontAwesomeIcon className='icon' icon={ faEnvelope } size='3x' />
                    <img className='profilePic' src='https://i.pravatar.cc/150?img=7' alt='profile' />
                </div>
            </div>
            <div className='navigation'>
                <nav>
                    <Link className='nav-item' to="/">Home</Link>
                    <Link className='nav-item' to="/mentors">Mentors</Link>
                    <Link className='nav-item' to="/Resources">Resources</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;