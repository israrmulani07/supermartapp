import React from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
export const Todolist = ({ item }) => {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Card sx={{ bgcolor: "red" }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <Card sx={{ bgcolor: "green" }}>

                                </Card>
                            </Grid>
                            <Grid item xs={5}>
                                <Card>
                                    {item.title}
                                </Card>
                            </Grid>
                            <Grid item xs={1}>
                                <Card>
                                    {item.userId}
                                </Card>
                            </Grid>
                            <Grid item xs={1}>
                                <Card>
                                    {item.completed}
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}><Button variant="contained" color="success" >Update</Button></Grid>
                        <Grid item xs={2}><Button variant="contained" color="error">Delete</Button></Grid>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment >
    )
}