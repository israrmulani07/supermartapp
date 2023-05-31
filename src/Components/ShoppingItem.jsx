import React from "react"
import { Grid, TextField, Card, CardContent, Rating, Badge } from "@mui/material"
export const ShoppingItem = ({ item }) => {
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Card sx={{ bgcolor: "lightsteelblue", border: "solid", borderRadius: 5 }}>
                    <CardContent>
                        <Grid container spacing={2} align="center">

                            <Grid item xs={12}>
                                <Badge badgeContent={`$ ${item.price}`} max={99999} color="primary">
                                    <img src={item.image} width={155} height={160} />
                                </Badge>

                            </Grid>

                            <Grid item xs={12}><strong>
                                {item.title.slice(0, 19).trim() + "..."}</strong>
                            </Grid>

                            <Grid item xs={12}>
                                {item.description.slice(0, 60).trim() + "..."}
                            </Grid>
                            <Grid item xs={8}>
                                <Rating value={item.rating.rate} /> <span></span>
                            </Grid>
                            <Grid item xs={4}>{`(${item.rating.count})`}</Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </Grid>
        </React.Fragment >
    )
}