
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './MyProfileAnalitics.module.css'

import MyProfileAnaliticsBarChart from './MyProfileAnaliticsBarChart';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function MyProfileAnalitics() {
    return (
        <div >
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        My Analitics
                    </Typography>
                    <div className={styles.bar_chart} >

                        <MyProfileAnaliticsBarChart />
                    </div>

                </CardContent>

            </Card>
        </div>
    );
}
