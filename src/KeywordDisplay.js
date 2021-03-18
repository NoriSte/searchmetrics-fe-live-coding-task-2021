import React from 'react';

const KeywordDisplay = ({ literal, id, searchVolume, cpc, trend }) => {

    return (
        <div className="KeywordDisplay-container">
            <h2>{literal}</h2>
            <div className="KeywordDisplay-right">
                <div>{searchVolume} searches / day</div>
                <div>{cpc}€</div>
            </div>
        </div>
    )
}

export default KeywordDisplay;