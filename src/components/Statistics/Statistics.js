import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsDetails from '../StatisticsDetails/StatisticsDetails';

const Statistics = () => {
    const DataForTotalValue = useLoaderData();
    const allData =DataForTotalValue.data;
    console.log(allData);
    return (
        <div>
            <h3>This is Chart Page</h3>
            {
                allData.map(total => <StatisticsDetails
                    key ={total.id}
                    item = {total}
                    ></StatisticsDetails> )
            }
        </div>
    );
};

export default Statistics;