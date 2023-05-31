import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Card, CardContent } from '@mui/material'


export const CountryList = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const result = await axios.get("http://localhost:3030/countries")
        setData(result.data.result)
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <React.Fragment >
            <Card>
                <CardContent>
                    <Grid container spacing={3} align="center">
                        <Grid item xs={6}> ID </Grid>
                        <Grid item xs={6}> Name </Grid>
                        {data && data.length &&
                            data.map((item) => (
                                <React.Fragment>
                                    <Grid item xs={6}>
                                        {item.id}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {item.name}
                                    </Grid>
                                </React.Fragment>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>

        </React.Fragment >
    )
}
