import React, { useState, useEffect } from 'react';
import styles from './infoSection.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { CardStyled } from '../';

export const InfoSection = (props) => {

    const data = props.data;
    const cardInfoInfected = {Title: "Infected", Data: data.confirmed, lastUpdate: data.lastUpdate};
    const cardInfoDeaths = {Title: "Deaths", Data: data.deaths, lastUpdate: data.lastUpdate};
    const cardInfoRecovered = {Title: "Recovered", Data: data.recovered, lastUpdate: data.lastUpdate};

    return (
        <div className={styles.infoSection}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={10} md={3}>
                    <CardStyled cardInfo={cardInfoInfected}/>
                </Grid>
                <Grid item xs={10} md={3}>
                    <CardStyled cardInfo={cardInfoDeaths}/>
                </Grid>
                <Grid item xs={10} md={3}>
                    <CardStyled cardInfo={cardInfoRecovered}/>
                </Grid>
            </Grid>
        </div>
    )
}