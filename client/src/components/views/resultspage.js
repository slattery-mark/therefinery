import React from 'react';
import { useParams } from 'react-router-dom';

import './resultspage.css';

const ResultsPage = () => {
    const { firstID, secondID } = useParams();

    React.useEffect(() => {

    }, [firstID, secondID]);

    return (
        <div className='results-page'>
            <p>First ID: {firstID}</p>
            {secondID ?
                <p><br />Second ID: {secondID}</p>
                : null}
        </div>
    )
}

export default ResultsPage;