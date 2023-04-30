
import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './MyProfileAnalitics.module.css'
// import { useContext } from 'react';
// import { AppContext } from '../../utils/AppContextProvider';

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
