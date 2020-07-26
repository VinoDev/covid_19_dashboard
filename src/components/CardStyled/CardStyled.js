import React, { useState, useEffect } from 'react';
import styles from './cardStyled.module.css';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, CircularProgress } from '@material-ui/core';

export const CardStyled = (props) => {

    const data = props.cardInfo.Data;

    return (
        <Card className={styles[props.cardInfo.Title]}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{props.cardInfo.Title}</Typography>
                {data ?
                    <div>
                        <Typography variant="h5">
                            <CountUp start={0} end={data} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.cardInfo.lastUpdate).toDateString()}</Typography>
                    </div>
                    :
                    <CircularProgress />
                }
            </CardContent>
        </Card>
    )
}

