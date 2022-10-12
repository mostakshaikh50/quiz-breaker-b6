import React from 'react';

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';


const StatisticsDetails = () => {
        const data = [
        
            {
                name: "React",
                uv: 8
            },
            {
                name: "Javascript",
                uv: 9
            },
            {
                name:"CSS",
                uv: 8
            },
            {
                name: "Git",
                uv: 11
            }
            
          ];

    
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            </LineChart>
        </div>
    );
};

export default StatisticsDetails;


// const StatisticsDetails = ({ item }) => {
//     console.log(item.total)
//     const data = [
        
        
//         {
//           name: "Page B",
//           uv: 3000,
//           pv: 1398,
//           amt: 2210
//         },
//         {
//           name: "Page C",
//           uv: 2000,
//           pv: 9800,
//           amt: 2290
//         },
//         {
//           name: "Page D",
//           uv: 2780,
//           pv: 3908,
//           amt: 2000
//         },
//         {
//           name: "Page E",
//           uv: 1890,
//           pv: 4800,
//           amt: 2181
//         },
//         {
//           name: "Page F",
//           uv: 2390,
//           pv: 3800,
//           amt: 2500
//         },
//         {
//           name: "Page G",
//           uv: 3490,
//           pv: 4300,
//           amt: 2100
//         },

// {
//           name: "Page G",
//           uv: 3490,
//           pv: 4300,
//           amt: 2100
//         },
//     //     const data = [
        
//     //         {
//     //             name: "React",
//     //             uv: 8
//     //         },
//     //         {
//     //             name: "Javascript",
//     //             uv: 9
//     //         },
//     //         {
//     //             name:"CSS",
//     //             uv: 8
//     //         },
//     //         {
//     //             name: "Git",
//     //             uv: 11
//     //         }
            
//     //       ];

//       ];
//     return (

//         <div>
           
//            <LineChart width={500} height={400} data={data}>
//            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//            </LineChart>

//         </div>
//     );
// };

// export default StatisticsDetails;