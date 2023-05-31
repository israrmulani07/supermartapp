import React, { useState } from 'react'
import axios from 'axios'
import { Grid, Button, TextField } from '@mui/material'

export const Fullname = () => {
    const [fname, setFname] = useState("")
    const [mname, setMname] = useState("")
    const [lname, setLname] = useState("")
    const [fullname, setFullname] = useState("")

    const handleFullname = async () => {
        const playload = { fname, mname, lname }
        const result = await axios.post("http://localhost:4040/fullname", playload)
        setFullname(result.data)
    }

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}><TextField variant='outlined' label="First Name" fullWidth onChange={(e) => setFname(e.target.value)} /></Grid>
                <Grid item xs={3}><TextField variant='outlined' label="Middle Name" fullWidth onChange={(e) => setMname(e.target.value)} /></Grid>
                <Grid item xs={3}><TextField variant='outlined' label="Last Name" fullWidth onChange={(e) => setLname(e.target.value)} /></Grid>
                <Grid item xs={3}><Button variant='contained' fullWidth onClick={handleFullname} sx={{ height: 55 }}>Submit</Button></Grid>
                <Grid item xs={12}><h1>{fullname}</h1></Grid>
            </Grid>
        </React.Fragment>
    )
}
