import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Emp } from "./Emp";
import { Cars } from "./Cars"
import { Branches } from "./Branches";
import { Counter } from "./Counter"
export const Home = () => {
    return (
        <React.Fragment>
            {/* <Emp /> */}
            <br />
            <br />
            {/* <Cars /> */}
            <br />
            <br />
            <br />
            
            {/* <Branches /> */}
            <br />
            <br />
            <br />
            <Counter />

            <br />
            <br />
            <br />
            <br />

            <Link style={{ textDecoration: 'none' }} to="/contact">
                <Button variant="contained">Go to Contact</Button>
            </Link>
        </React.Fragment>

    )
}