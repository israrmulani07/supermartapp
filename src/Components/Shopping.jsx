import React, { useEffect, useState } from "react"
import axios from "axios";
import { ShoppingItem } from "./ShoppingItem"
import { Grid, TextField } from "@mui/material"

export const Shopping = () => {
    const [data, setData] = useState([]);
    const [origdata, setOrigdata] = useState([]);
    const [txt, setTxt] = useState("");

    const getData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        setData(result.data)
        setOrigdata(result.data);
    };

    useEffect(() => {
        const filtered = origdata.filter((item) => item.title.toUpperCase().includes(txt.toUpperCase()));
        setData(filtered);

    }, [txt]);


    useEffect(() => {
        getData();
    }, [])

    return (
        <React.Fragment>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>

                <Grid item xs={12}><TextField variant="outlined" fullWidth label="Search...." onChange={(e) => setTxt(e.target.value)} /></Grid>

                {
                    data.map((item) => (
                        <ShoppingItem item={item} />
                    )
                    )}

            </Grid>

        </React.Fragment>
    )
}