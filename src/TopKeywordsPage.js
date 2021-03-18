import React, { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import KeywordDisplay from './KeywordDisplay';


const TopKeywordsPage = () => {
    const [filter, setFilter] = useState('all');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [keywords, setKeywords] = useState([]);

    const loadKeywords = async () => {
        const json = await fetch("https://status.searchmetrics.com/fe-live-coding-info/keywords/keywords.json")
            .then(res => res.json());
            
        const { country, date, keywords } = json
        setCountry(country);
        setDate(date);
        setKeywords(keywords);
    }

    useEffect(() => loadKeywords(), []);


    const filteredKeywords = filter === 'all' 
        ? keywords 
        : keywords.filter((keyword) => keyword.trend === filter)

    return (
        <div className="TopKeywordsPage">
            <div className="TopKeywordsPage-header">
                <div>
                    These are the top search keywords in {country} on {date}
                </div>
                <FilterBar currentFilter={filter} onChange={setFilter} />  

            </div>
            <div className="TopKeywordsPage-items">
                {filteredKeywords.map((keyword, i) => <KeywordDisplay key={i} {...keyword} />)}
            </div>
        </div>
    )
}

export default TopKeywordsPage;