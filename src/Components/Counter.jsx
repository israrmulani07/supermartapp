import React, { useState } from 'react'
import { Grid, Card, CardContent, Button } from '@mui/material'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">
                <Grid item xs={4}><Button variant='contained' onClick={() => setCount(count + 1)} sx={{ height: 90 }} fullWidth>Add</Button></Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 90, width: 90 }}>
                        <CardContent>
                            {count}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}><Button variant='contained' onClick={() => setCount(count - 1)} sx={{ height: 90 }} fullWidth>Min</Button></Grid>

            </Grid>
        </React.Fragment >
    )
}
