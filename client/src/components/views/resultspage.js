import React from 'react';
import { useParams } from 'react-router-dom';

import './resultspage.css';

const ResultsPage = () => {
    const params = useParams();

    React.useEffect(() => {
        console.log(params);
    }, [params]);

    return (
        <div className='results-page'>
            <p>First ID: {params.firstID}</p>
            {params.secondID ?
                <p><br />Second ID: {params.secondID}</p>
                : null}
        </div>
    )
}

export default ResultsPage;