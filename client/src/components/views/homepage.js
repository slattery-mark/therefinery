import React from 'react';
import { ReactComponent as Arrow } from '../common/arrow.svg'
import './homepage.css';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='info'>
                <Arrow className='info__arrow' />
                <div className='info__site-description'>
                    <p className='info__site-description-text'>Enter your Steam ID to get game recommendations, enter 2 Steam IDs to get recommendations to enjoy with a friend.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;