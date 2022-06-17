import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Arrow } from '../common/arrow.svg'
import './homepage.css';

/**
 * The home page of the app.
 */
const HomePage = () => {
    const [searchParams] = useSearchParams();
    const [steamIds, setSteamIds] = useState({ steamId1: '', steamId2: '' });

    useEffect(() => {
        let steamId1 = searchParams.get('steamId1');
        let steamId2 = searchParams.get('steamId2');
        setSteamIds({ steamId1: steamId1, steamId2: steamId2 });
    }, [searchParams])

    return (
        <div className='homepage'>
            {
                /* default page - no search parameters */
                (!steamIds.steamId1 && !steamIds.steamId2) ?
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
                steamIds.steamId1 ?
                    <h2>First: {steamIds.steamId1}</h2>
                    : null
            }

            {
                /* search results with 2 steam IDs */
                steamIds.steamId2 ?
                    <h2><br />Second: {steamIds.steamId2}</h2>
                    : null
            }
        </div>
    )
}

export default HomePage;