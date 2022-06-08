import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Arrow } from '../common/arrow.svg'
import './homepage.css';

/**
 * The home page of the app.
 */
const HomePage = () => {
    const [searchParams] = useSearchParams();
    const [steamIDs, setSteamIDs] = useState({ firstID: '', secondID: '' });

    useEffect(() => {
        let firstID = searchParams.get('firstID');
        let secondID = searchParams.get('secondID');
        setSteamIDs({ firstID: firstID, secondID: secondID });
    }, [searchParams])

    return (
        <div className='homepage'>

            {(!steamIDs.firstID && !steamIDs.secondID) ?
                <div className='info'>
                    <Arrow className='info__arrow' />
                    <div className='info__site-description'>
                        <p className='info__site-description-text'>Enter your Steam ID to get game recommendations, enter 2 Steam IDs to get recommendations to enjoy with a friend.</p>
                    </div>
                </div>
                : null}
            {steamIDs.firstID ? <h1>First: {steamIDs.firstID}</h1> : null}
            {steamIDs.secondID ? <h1>Second: {steamIDs.secondID}</h1> : null}

        </div>
    )
}

export default HomePage;