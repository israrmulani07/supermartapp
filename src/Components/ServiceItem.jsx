import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";


export const ServicesItem = ({ item, index, handleDelete, handleSave }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [val, setVal] = useState(item.title)
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={0.5}>
                                <Card sx={{ bgcolor: item.completed ? "green" : "yellow", height: 60 }}>
                                    <CardContent>

                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={5.5}>

                                {isUpdate ? (<TextField value={val} fullWidth variant="outlined" label="Title.." onChange={(e) => setVal(e.target.value)} />) : (
                                    <Card sx={{ bgcolor: "coral" }}>
                                        <CardContent> {item.title}</CardContent>
                                    </Card>)}

                            </Grid>
                            <Grid item xs={1}>
                                <Card sx={{ height: 60, align: "center" }}>
                                    {item.userId}
                                </Card>
                            </Grid>
                            <Grid item xs={1}>
                                <Card sx={{ height: 60, align: "center", bgcolor: item.completed ? "green" : "yellow" }}>
                                    {item.completed ? "completed" : "In progress"}
                                </Card>
                            </Grid>
                            <Grid item xs={2}>{isUpdate ? (<Button variant="contained" fullWidth color="success" sx={{ height: 60, align: "center" }} onClick={() => { handleSave(index, val); setIsUpdate(false); }}>Save</Button>) : (<Button fullWidth variant="contained" onClick={() => setIsUpdate(true)}>Update</Button>)}</Grid>
                            <Grid item xs={2}><Button variant="contained" fullWidth color="error" sx={{ height: 60, align: "center" }} onClick={() => handleDelete(index)}>Delete</Button></Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment >
    )
}