import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Card, CardContent } from '@mui/material'

export const Branches = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const result = await axios.get("http://localhost:5050/branches")
        setData(result.data)
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <React.Fragment>
            <h1>Branches</h1>
            <Grid container spacing={3}>
                {
                    data.map(item =>
                        <Grid item xs={3}>
                            <Card sx={{ bgcolor: 'lightgoldenrodyellow', border: "solid", borderRadius: 3 }}>
                                <CardContent>
                                    {item.Name},{item.City}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </React.Fragment>
    )
}
