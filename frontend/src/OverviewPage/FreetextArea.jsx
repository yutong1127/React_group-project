import { TextField } from '@mui/material'

export default function FreetextArea() {

    return (
        <TextField
        id="filled-multiline-static"
        label="Notes"
        multiline
        rows={5}
        variant="filled"
      />
    )
}