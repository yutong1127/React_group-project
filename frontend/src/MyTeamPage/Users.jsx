
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieChart from './PieChart';
import styles from './Users.module.css'


export default function Users() {
    return (
        <div >

            <Card sx={{ maxWidth: 345 }}>
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
