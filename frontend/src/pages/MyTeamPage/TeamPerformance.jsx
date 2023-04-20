
import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './TeamPerformance.module.css'
import TeamPerformanceBarChart from './TeamPerformanceBarChart';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function TeamPerformance() {
    return (
        <div >
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Team Performance
                    </Typography>
                    <div className={styles.bar_chart} >

                        <TeamPerformanceBarChart />
                    </div>

                </CardContent>

            </Card>
        </div>
    );
}
