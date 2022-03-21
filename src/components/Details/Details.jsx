import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
//import { Doughnut } from 'react-chartjs-2';
//import {Chart} from 'chart.js';
//Chart.register(ArcElement);

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* <Doughnut data={chartData}  options={{ responsive: true }} /> */}
        <Chart type='doughnut' data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;