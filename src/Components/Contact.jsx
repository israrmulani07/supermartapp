import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Fullname } from "./Fullname";
export const Contact = () => {
    return (
        <React.Fragment>
            <h1>My Contact  </h1>

            <br />
            <br />
            <Link style={{ textDecoration: 'none' }} to="/home">
                <Button variant="contained">Go to Home</Button>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Fullname />
        </React.Fragment>

    )
}