import React, { useState } from 'react'
import { Grid, Button, TextField } from '@mui/material'
import axios from "axios"
import { CityList } from './CityList'

export const City = () => {
    const [data, setData] = useState([]);
    const [txt, setTxt] = useState(1);

    const handleFind = async () => {
        const payload = {
            ctrId: txt,
            // name: txt
        }

        const result = await axios.post("http://localhost:3030/citiesbyfilt", payload)
        setData(result.data);

    };

    return (
        <React.Fragment>
            <Grid container spacing={3} align="center" marginTop={1}>

                <Grid item xs={5}>DropDown</Grid>
                <Grid item xs={5}><TextField variant='outlined' label="Search...." fullWidth onChange={(e) => setTxt(e.target.value)} /></Grid>
                <Grid item xs={2}><Button variant='contained' sx={{ height: 55 }} fullWidth onClick={handleFind}>Find</Button></Grid>

                <Grid item xs={12}> <CityList data={data.result} /> </Grid>

            </Grid>

        </React.Fragment>
    )
}
