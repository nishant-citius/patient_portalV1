import React, { Component, useEffect } from 'react';
import { Bar }from 'react-chartjs-2';

const BarChart  = () => {
    return <div>
        <Bar 
        data={{
             labels:["Monday", "Tuesday", "Wednesday"," Thursday", "Friday ","Saturday","susmitha" ],
             datasets:[
                 {
                        label:'No of patients visited',
                        data:[12,19,13,5,2,4],
                        backgroundColor:['Red'],
                     
                    },
                    { 
                        label:'No of patients per month',
                        labels:["Janu", "Tuesday", "Wednesday"," Thursday", "Friday ","Saturday","Sunday" ],
                    data:[102,109,130,105,210,40],
                    backgroundColor:"orange",
                    }
                ],
                        borderWidth:1,
                        
            }}
            
            height={400}
            width={600}
        options={{
            maintainAspectRatio:false,
            scales:{
                yAxes:[
                    {
                        ticks:{
                            beginAtZero:true,
                        }
                    }
                    
                ]
            }

        }}
        />
    </div>
}
    
 
export default BarChart ;