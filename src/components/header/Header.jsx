import React from 'react'
import './Header.scss'
import { headlogo, profile } from '../../images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import WindowIcon from '@mui/icons-material/Window';
import PollIcon from '@mui/icons-material/Poll';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Upload from '../upload/Upload';

const Header = () => {




    return (
        <section className='header'>
            <header className='header-container'>
                <div className="h-logo">
                    <div className='mobile-nav' onClick={() => {
                        const nav_header = document.querySelector('.header');
                        const toggleMobile = () => {
                            nav_header.classList.toggle('active');
                        }
                        toggleMobile()
                    }} >
                        <MenuIcon className='mobile-icon ' name='menu' />
                        <CloseIcon className='mobile-icon' name='close' />
                    </div>
                    <img src={headlogo} alt="logo" />
                    <span>Base</span>
                </div>

                <div className="h-profile">
                    <div className="h-bell">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="profile">
                        <img src={profile} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="nav">
                <nav className='nav-container'>
                    <ul className="nav-data ">
                        <Link to={''} style={{ textDecoration: 'none' }}><li><WindowIcon /><span>Dashboard</span></li></Link>
                        <Link to={'/home'} style={{ textDecoration: 'none' }}><li className='active'><PollIcon /><span>Upload</span></li></Link>
                        <Link to={''} style={{ textDecoration: 'none' }}><li ><ConfirmationNumberIcon /><span>Invoice</span></li></Link>
                        <Link to={''} style={{ textDecoration: 'none' }}><li><TextSnippetIcon /><span>Schedule</span></li></Link>
                        <Link to={''} style={{ textDecoration: 'none' }}><li><CalendarMonthIcon /><span>Calendar</span></li></Link>
                        <Link to={''} style={{ textDecoration: 'none' }}><li><NotificationsIcon />Notification</li></Link>
                        <Link to={'/'} style={{ textDecoration: 'none' }}><li><SettingsIcon /><span>Settings</span></li></Link>
                    </ul>
                </nav>
                <aside className="content">
                    <Upload />
                </aside>
            </div>

        </section>
    )
}

export default Header
