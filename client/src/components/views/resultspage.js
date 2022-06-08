import React from 'react';
import { useParams } from 'react-router-dom';

import './resultspage.css';

const ResultsPage = () => {
    const params = useParams();

    React.useEffect(() => {
        console.log(params);
    }, []);

    return (
        <div className='results-page'>
        </div>
    )
}

export default ResultsPage;