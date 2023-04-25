
import * as React from 'react';
import {Card,CardContent , Typography} from '@mui/material';
import PieChart from './PieChart';
import styles from './Users.module.css'


export default function Users() {
    return (
        <div >

            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Users
                    </Typography>
                    <div className={styles.pie_chart} > 
                    <PieChart />
                    </div> 
                    
                </CardContent>

            </Card>
        </div>
    );
}
