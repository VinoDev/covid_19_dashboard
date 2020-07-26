import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './chart.module.css';
import { fetchDailyGlobal } from '../../api';

export const Chart = ({data: {data: {confirmed, deaths, recovered}, country}}) => {
    const [dailyGlobalData, setDailyGlobalData] = useState([]);

    useEffect(() => {
        const fetchDailyGlobalDataToState = async () => {
            const dailyGlobalData = await fetchDailyGlobal();
            setDailyGlobalData(dailyGlobalData);
        };
        fetchDailyGlobalDataToState();
    }, [])
    
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Deaths', 'Recovered'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'],
                            data: [confirmed, deaths, recovered],
                        }
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            barPercentage: 0.7
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: false,
                                callback: function (value, index, values) {
                                    return value.toLocaleString();
                                }
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItems, data) {
                                return data.labels[tooltipItems.index] + ": " + data.datasets[0].data[tooltipItems.index].toLocaleString();
                            }
                        }
                    },
                    legend: { display: false }
                }}
            />
        ) : null
    );

    const lineChart = (
        dailyGlobalData[0] ? (
            <Line
                data={{
                    labels: dailyGlobalData.map(({reportDate}) => reportDate),
                    datasets: [{
                        data: dailyGlobalData.map((data) => data.totalConfirmed),
                        label: 'Infected',
                        borderColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    },
                    { 
                        data: dailyGlobalData.map((data)=>data.deaths),
                        label: 'deaths',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        fill: true
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes:[{
                            ticks: {
                                callback: function(value, index, values) {
                                    return value.toLocaleString();
                                }
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItems, data){
                                return data.datasets[tooltipItems.datasetIndex].label + ": " + data.datasets[0].data[tooltipItems.index].toLocaleString();
                            }
                        }
                    }
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                {country ? barChart : lineChart}
            </div>
        </div>
    )
}