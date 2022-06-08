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
            {
                /* default page - no search parameters */
                (!steamIDs.firstID && !steamIDs.secondID) ?
                    <div className='info'>
                        <Arrow className='info__arrow' />
                        <div className='info__site-description'>
                            <p className='info__site-description-text'>Enter your Steam ID to get game recommendations, enter 2 Steam IDs to get recommendations to enjoy with a friend.</p>
                        </div>
                    </div>
                    : null
            }

            {
                /* search results with 1 steam ID */
                steamIDs.firstID ?
                    <h2>First: {steamIDs.firstID}</h2>
                    : null
            }

            {
                /* search results with 2 steam IDs */
                steamIDs.secondID ?
                    <h2><br />Second: {steamIDs.secondID}</h2>
                    : null
            }
        </div>
    )
}

export default HomePage;