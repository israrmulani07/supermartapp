import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button, TextField } from "@mui/material";
import { Todolist } from "./Todolist";

export const Todo = () => {
    const [data, setData] = useState = ([]);


    const getData = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(result.data);
    };

    useEffect(() => {
        getData();

    }, []);

    return (
        <React.Fragment>

            <Grid container spacing={2}>
                {/* <Grid item xs={12}><TextField variant="outlined" label="Search" fullWidth /></Grid> */}
                {
                    data.map((item) => (
                        <Todolist item={item} />
                    ))}



            </Grid>

        </React.Fragment>
    )
}