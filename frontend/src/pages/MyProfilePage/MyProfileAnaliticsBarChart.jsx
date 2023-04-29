
import {ResponsiveBar} from '@nivo/bar';
import{data} from "./DummyData";
import styles from "./MyProfileAnalitics.module.css";
import { useContext } from 'react';
import { AppContext } from '../../../src/utils/AppContextProvider';
import { Typography } from '@mui/material';


export default function MyProfileAnaliticsBarChart() {
    const {tasksCompleted}  = useContext(AppContext);
    // console.log("MyProfileAnalitics");
    // const item1 = tasksCompleted[0];
    // console.log(item1);
    // console.log("date " + date.substring(0,10));
    // console.log("date " + date.getDate());

    // const unix ="1682661408";
    //conver unix to year month day
    // const date = new Date(unix*1000);
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDay();
    // console.log("Date: "+ year + "/" + month + "/" + day);
    return (
        <div className={styles.bar_chart} >

        <ResponsiveBar 
        data={data}
        keys={[
            'bloodTest',
            'radiology',
            'reviews',
            'discharge',
            'other'
        ]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}

        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '7 Days',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Tasks',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableGridY={false}
        labelSkipWidth={18}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={false}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </div>
    )
}

