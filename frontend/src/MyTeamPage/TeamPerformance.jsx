
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
