import React from 'react'
import { Grid, Card, CardContent } from '@mui/material'

export const CityList = ({ data }) => {
    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Grid container spacing={3} align="center">
                        <Grid item xs={4}>ID</Grid>
                        <Grid item xs={4}>Name</Grid>
                        <Grid item xs={4}>Country ID</Grid>
                        {
                            data && data.length > 0 && data.map((item) => (
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        {item.id}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {item.name}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {item.ctrId}
                                    </Grid>
                                </React.Fragment>)
                            )
                        }
                    </Grid>

                </CardContent>
            </Card>

        </React.Fragment>
    )
}
