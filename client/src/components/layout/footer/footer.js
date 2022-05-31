import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__description-text'>The Refinery is a game recommendation app that uses Steam’s API to suggest relevent games for any Steam user(s).</p>
            <a href='https://github.com/slattery-mark/therefinery' ><FontAwesomeIcon icon={faGithub} color='#FFFFFF' className='footer__github-logo' /></a>
        </footer>
    )
}

export default Footer;