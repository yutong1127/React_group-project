import { useState, useRef } from 'react';
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
} from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function Task(props) {
    const [checked, setChecked] = useState(() => {
        if (props.task.status === 2) {
            return true
        } else return false
    }
    );
    const [indeterminate, setIndeterminate] = useState(() => {
        if (props.task.status === 1) {
            return true
        } else return false
    });

    const handleCheckboxClick = () => {
        if (!checked && !indeterminate) {
            setIndeterminate(true);
        } else if (!checked && indeterminate) {
            setChecked(true);
            setIndeterminate(false);
        } else {
            setChecked(false);
            setIndeterminate(false);
        }
    };


    return (
        <Grid item xs={6}>
            <FormGroup>
                <FormControlLabel control={<Checkbox
                    onClick={handleCheckboxClick}
                    indeterminate={indeterminate}
                    checked={checked}
                    icon={<CircleOutlinedIcon />}
                    indeterminateIcon={<ChangeCircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlineOutlinedIcon />}
                />}
                    label={props.task.type} />
            </FormGroup>
        </Grid>
    )
}