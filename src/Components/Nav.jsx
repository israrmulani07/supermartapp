import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Nav = () => {
    const [data, setData] = useState(["Home", "services", "Shopping", "About Us", "Contact", "Help", "About"])

    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">
                {
                    data.map((item) => (
                        <Grid item xs={2}>

                            <Link style={{ textDecoration: 'none' }} to={`/${item.toLowerCase()}`}>
                                <Button variant="contained" size="large" fullWidth>{item}</Button>
                            </Link>

                        </Grid>
                    )
                    )
                }

            </Grid>
        </React.Fragment >

    )
}